from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HospitalInfoViewSet, ServiceViewSet, DoctorViewSet, HospitalImageViewSet

router = DefaultRouter()
router.register(r'hospital-info', HospitalInfoViewSet, basename='hospital-info')
router.register(r'services', ServiceViewSet, basename='services')
router.register(r'doctors', DoctorViewSet, basename='doctors')
router.register(r'images', HospitalImageViewSet, basename='images')

urlpatterns = [
    path('', include(router.urls)),
]
