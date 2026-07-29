from django.db import models

class HospitalInfo(models.Model):
    name = models.CharField("Nome", max_length=255, default="Hospital Nossa Senhora do Brasil")
    address = models.CharField("Endereço", max_length=255)
    phone = models.CharField("Telefone", max_length=50)
    email = models.EmailField("E-mail")
    instagram = models.CharField("Instagram", max_length=100, blank=True, null=True)
    facebook = models.CharField("Facebook", max_length=100, blank=True, null=True)
    pix_key = models.CharField("Chave PIX para Doações", max_length=255)
    working_hours = models.CharField("Horário de Atendimento", max_length=100, default="Atendimento 24 horas")
    about_title = models.CharField("Título Sobre", max_length=255, default="Compromisso com a saúde e o bem-estar da comunidade.")
    about_text_1 = models.TextField("Texto Sobre 1")
    about_text_2 = models.TextField("Texto Sobre 2")
    mission = models.TextField("Missão")
    vision = models.TextField("Visão")
    values = models.TextField("Valores")

    class Meta:
        verbose_name = "Informações do Hospital"
        verbose_name_plural = "Informações do Hospital"

    def __str__(self):
        return self.name

class Service(models.Model):
    CATEGORY_CHOICES = [
        ('imagem', 'Exames de Imagem'),
        ('laboratorial', 'Exames Laboratoriais'),
        ('consulta', 'Consultas Médicas Especializadas'),
        ('medicamento', 'Administração de Medicamentos'),
        ('cirurgia', 'Cirurgias'),
        ('plantao', 'Plantão Médico 24 Horas'),
        ('geral', 'Geral'),
    ]

    title = models.CharField("Título", max_length=255)
    text = models.TextField("Descrição")
    icon = models.CharField("Classe do Ícone (React Icons)", max_length=100, default="FaUserMd")
    category = models.CharField("Categoria", max_length=50, choices=CATEGORY_CHOICES, default='geral')

    class Meta:
        verbose_name = "Serviço"
        verbose_name_plural = "Serviços"

    def __str__(self):
        return self.title

class Doctor(models.Model):
    name = models.CharField("Nome do Médico", max_length=255)
    specialty = models.CharField("Especialidade", max_length=255)
    phone = models.CharField("Contato/Telefone", max_length=50, blank=True, null=True)
    crm = models.CharField("CRM", max_length=50, blank=True, null=True)
    image = models.ImageField("Foto", upload_to="doctors/", blank=True, null=True)

    class Meta:
        verbose_name = "Médico"
        verbose_name_plural = "Médicos"

    def __str__(self):
        return f"{self.name} - {self.specialty}"

class HospitalImage(models.Model):
    title = models.CharField("Título da Imagem", max_length=255)
    image = models.ImageField("Imagem", upload_to="hospital/")
    description = models.TextField("Descrição", blank=True, null=True)

    class Meta:
        verbose_name = "Imagem do Hospital"
        verbose_name_plural = "Imagens do Hospital"

    def __str__(self):
        return self.title
