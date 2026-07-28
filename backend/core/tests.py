from django.test import TestCase
from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from rest_framework.authtoken.models import Token
from .models import HospitalInfo, Doctor, Achievement, DonationCampaign, DonationMethod

class ModelTests(TestCase):
    def test_create_hospital_info(self):
        info = HospitalInfo.objects.create(
            nome="Hospital de Teste",
            historia="História de teste",
            missao="Missão de teste",
            visao="Visão de teste",
            valores="Valores de teste",
            endereco="Rua Teste, 123",
            telefone="11999999999",
            email="teste@hospital.com",
            horario_funcionamento="24 horas"
        )
        self.assertEqual(str(info), "Hospital de Teste")

    def test_create_doctor(self):
        doctor = Doctor.objects.create(
            nome="Dr. João Silva",
            especialidade="Cardiologia",
            crm="12345-SP",
            biografia="Biografia do médico de teste"
        )
        self.assertEqual(str(doctor), "Dr. João Silva - Cardiologia (CRM: 12345-SP)")


class APITests(APITestCase):
    def setUp(self):
        # Criar usuário administrador para testar rotas protegidas
        self.admin_user = User.objects.create_superuser(
            username="admin_teste",
            email="admin@teste.com",
            password="senha_dificil_teste"
        )
        self.token = Token.objects.create(user=self.admin_user)
        
        # Criar alguns dados básicos
        self.doctor = Doctor.objects.create(
            nome="Dra. Maria Souza",
            especialidade="Pediatria",
            crm="54321-RJ",
            biografia="Pediatra de teste"
        )

    def test_get_doctors_list_public(self):
        # Acesso público deve retornar 200
        url = reverse('doctors-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['nome'], "Dra. Maria Souza")

    def test_post_doctor_unauthenticated(self):
        # Acesso não autenticado para criar registro deve falhar (401/403)
        url = reverse('doctors-list')
        data = {
            "nome": "Dr. Carlos Santos",
            "especialidade": "Ortopedia",
            "crm": "98765-MG",
            "biografia": "Ortopedista de teste"
        }
        response = self.client.post(url, data)
        self.assertIn(response.status_code, [status.HTTP_401_UNAUTHORIZED, status.HTTP_403_FORBIDDEN])

    def test_post_doctor_authenticated(self):
        # Acesso autenticado com Token deve criar o registro (201)
        url = reverse('doctors-list')
        data = {
            "nome": "Dr. Carlos Santos",
            "especialidade": "Ortopedia",
            "crm": "98765-MG",
            "biografia": "Ortopedista de teste"
        }
        # Autenticar a requisição com o Token
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.token.key)
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Doctor.objects.count(), 2)

    def test_login_success(self):
        # Login com credenciais válidas deve retornar o Token
        url = reverse('api_token_auth')
        data = {
            "username": "admin_teste",
            "password": "senha_dificil_teste"
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('token', response.data)
        self.assertEqual(response.data['token'], self.token.key)

    def test_login_invalid_credentials(self):
        # Login com credenciais inválidas deve retornar erro
        url = reverse('api_token_auth')
        data = {
            "username": "admin_teste",
            "password": "senha_incorreta"
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertNotIn('token', response.data)
