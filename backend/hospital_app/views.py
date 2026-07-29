from rest_framework import viewsets
from rest_framework.response import Response
from .models import HospitalInfo, Service, Doctor, HospitalImage
from .serializers import HospitalInfoSerializer, ServiceSerializer, DoctorSerializer, HospitalImageSerializer

class HospitalInfoViewSet(viewsets.ModelViewSet):
    queryset = HospitalInfo.objects.all()
    serializer_class = HospitalInfoSerializer

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

    def get_serializer_context(self):
        # Passa o request para o serializer gerar URLs absolutas das imagens
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

class HospitalImageViewSet(viewsets.ModelViewSet):
    queryset = HospitalImage.objects.all()
    serializer_class = HospitalImageSerializer

    def get_serializer_context(self):
        # Passa o request para o serializer gerar URLs absolutas das imagens
        context = super().get_serializer_context()
        context['request'] = self.request
        return context
