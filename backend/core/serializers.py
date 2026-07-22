from rest_framework import serializers
from .models import HospitalInfo, Doctor, Achievement, DonationCampaign, DonationMethod

class HospitalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = HospitalInfo
        fields = '__all__'


class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'


class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = '__all__'


class DonationCampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonationCampaign
        fields = '__all__'


class DonationMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonationMethod
        fields = '__all__'
