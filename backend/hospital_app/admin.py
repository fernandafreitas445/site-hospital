from django.contrib import admin
from .models import HospitalInfo, Service, Doctor, HospitalImage

@admin.register(HospitalInfo)
class HospitalInfoAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'email', 'address')

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'icon')
    list_filter = ('category',)
    search_fields = ('title', 'text')

@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ('name', 'specialty', 'phone', 'crm')
    search_fields = ('name', 'specialty')

@admin.register(HospitalImage)
class HospitalImageAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')
    search_fields = ('title',)
