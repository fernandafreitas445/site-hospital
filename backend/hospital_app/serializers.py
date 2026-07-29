from rest_framework import serializers
from .models import HospitalInfo, Service, Doctor, HospitalImage

class HospitalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = HospitalInfo
        fields = '__all__'

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class DoctorSerializer(serializers.ModelSerializer):
    # Retorna a URL absoluta da imagem com host completo (ex: http://localhost:8000/media/...)
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Doctor
        fields = '__all__'

class HospitalImageSerializer(serializers.ModelSerializer):
    # Retorna a URL absoluta da imagem com host completo
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = HospitalImage
        fields = '__all__'
