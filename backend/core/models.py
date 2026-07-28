from django.db import models

class HospitalInfo(models.Model):
    nome = models.CharField(max_length=150, verbose_name="Nome do Hospital")
    historia = models.TextField(verbose_name="História do Hospital")
    missao = models.TextField(verbose_name="Missão")
    visao = models.TextField(verbose_name="Visão")
    valores = models.TextField(verbose_name="Valores")
    endereco = models.CharField(max_length=255, verbose_name="Endereço")
    telefone = models.CharField(max_length=20, verbose_name="Telefone")
    email = models.EmailField(verbose_name="E-mail")
    instagram = models.CharField(max_length=100, blank=True, null=True, verbose_name="Instagram (Link ou User)")
    facebook = models.CharField(max_length=100, blank=True, null=True, verbose_name="Facebook (Link ou User)")
    horario_funcionamento = models.CharField(max_length=150, verbose_name="Horário de Funcionamento")

    class Meta:
        verbose_name = "Informação Institucional"
        verbose_name_plural = "Informações Institucionais"

    def __str__(self):
        return self.nome


class Doctor(models.Model):
    nome = models.CharField(max_length=150, verbose_name="Nome do Médico")
    especialidade = models.CharField(max_length=100, verbose_name="Especialidade")
    crm = models.CharField(max_length=20, unique=True, verbose_name="CRM")
    foto = models.ImageField(upload_to="doctors/", blank=True, null=True, verbose_name="Foto de Perfil")
    biografia = models.TextField(verbose_name="Biografia")
    ativo = models.BooleanField(default=True, verbose_name="Ativo no Site?")

    class Meta:
        verbose_name = "Médico"
        verbose_name_plural = "Médicos"

    def __str__(self):
        return f"{self.nome} - {self.especialidade} (CRM: {self.crm})"


class Achievement(models.Model):
    titulo = models.CharField(max_length=150, verbose_name="Título da Realização")
    descricao = models.TextField(verbose_name="Descrição Detalhada")
    imagem = models.ImageField(upload_to="achievements/", blank=True, null=True, verbose_name="Imagem Ilustrativa")
    data_realizacao = models.DateField(verbose_name="Data da Realização")
    data_criacao = models.DateTimeField(auto_now_add=True, verbose_name="Data de Cadastro")

    class Meta:
        verbose_name = "Realização / Projeto"
        verbose_name_plural = "Realizações e Projetos"
        ordering = ["-data_realizacao"]

    def __str__(self):
        return self.titulo


class DonationCampaign(models.Model):
    titulo = models.CharField(max_length=150, verbose_name="Título da Campanha")
    descricao = models.TextField(verbose_name="Descrição da Campanha")
    imagem = models.ImageField(upload_to="campaigns/", blank=True, null=True, verbose_name="Imagem de Capa")
    chave_pix = models.CharField(max_length=100, verbose_name="Chave Pix para Doação")
    beneficiario = models.CharField(max_length=150, verbose_name="Beneficiário (Nome/Razão Social)")
    ativa = models.BooleanField(default=True, verbose_name="Campanha Ativa?")

    class Meta:
        verbose_name = "Campanha de Doação"
        verbose_name_plural = "Campanhas de Doação"

    def __str__(self):
        return self.titulo


class DonationMethod(models.Model):
    tipo = models.CharField(max_length=50, verbose_name="Tipo (Ex: Pix, Transferência)")
    descricao = models.CharField(max_length=255, verbose_name="Descrição (Ex: Chave CNPJ, Agência e Conta)")
    instrucoes = models.TextField(verbose_name="Instruções de Doação")
    ativo = models.BooleanField(default=True, verbose_name="Ativo?")

    class Meta:
        verbose_name = "Forma de Doação Fixa"
        verbose_name_plural = "Formas de Doação Fixas"

    def __str__(self):
        return f"{self.tipo} - {self.descricao}"


class ContactMessage(models.Model):
    nome = models.CharField(max_length=150, verbose_name="Nome")
    email = models.EmailField(verbose_name="E-mail")
    telefone = models.CharField(max_length=20, blank=True, null=True, verbose_name="Telefone")
    assunto = models.CharField(max_length=150, verbose_name="Assunto")
    mensagem = models.TextField(verbose_name="Mensagem")
    data_envio = models.DateTimeField(auto_now_add=True, verbose_name="Data de Envio")

    class Meta:
        verbose_name = "Mensagem de Contato"
        verbose_name_plural = "Mensagens de Contato"
        ordering = ["-data_envio"]

    def __str__(self):
        return f"{self.nome} - {self.assunto} ({self.data_envio.strftime('%d/%m/%Y %H:%M')})"

