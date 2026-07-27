from django.contrib import admin
from .models import HospitalInfo, Doctor, Achievement, DonationCampaign, DonationMethod, ContactMessage

@admin.register(HospitalInfo)
class HospitalInfoAdmin(admin.ModelAdmin):
    list_display = ("nome", "telefone", "email", "horario_funcionamento")
    # Limitar para evitar que criem múltiplos registros de informações institucionais, mantendo apenas 1
    def has_add_permission(self, request):
        if HospitalInfo.objects.exists():
            return False
        return True


@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ("nome", "especialidade", "crm", "ativo")
    list_filter = ("ativo", "especialidade")
    search_fields = ("nome", "especialidade", "crm")
    list_editable = ("ativo",)


@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    list_display = ("titulo", "data_realizacao", "data_criacao")
    list_filter = ("data_realizacao",)
    search_fields = ("titulo", "descricao")


@admin.register(DonationCampaign)
class DonationCampaignAdmin(admin.ModelAdmin):
    list_display = ("titulo", "beneficiario", "ativa")
    list_filter = ("ativa",)
    search_fields = ("titulo", "beneficiario")
    list_editable = ("ativa",)


@admin.register(DonationMethod)
class DonationMethodAdmin(admin.ModelAdmin):
    list_display = ("tipo", "descricao", "ativo")
    list_filter = ("ativo", "tipo")
    search_fields = ("tipo", "descricao")
    list_editable = ("ativo",)


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("nome", "email", "assunto", "data_envio")
    readonly_fields = ("nome", "email", "telefone", "assunto", "mensagem", "data_envio")
    search_fields = ("nome", "email", "assunto", "mensagem")
    list_filter = ("data_envio",)

