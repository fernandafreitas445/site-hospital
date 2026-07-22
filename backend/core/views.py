from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import HospitalInfo, Doctor, Achievement, DonationCampaign, DonationMethod
from .serializers import (
    HospitalInfoSerializer,
    DoctorSerializer,
    AchievementSerializer,
    DonationCampaignSerializer,
    DonationMethodSerializer,
)

class HospitalInfoViewSet(viewsets.ModelViewSet):
    queryset = HospitalInfo.objects.all()
    serializer_class = HospitalInfoSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class AchievementViewSet(viewsets.ModelViewSet):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class DonationCampaignViewSet(viewsets.ModelViewSet):
    queryset = DonationCampaign.objects.all()
    serializer_class = DonationCampaignSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class DonationMethodViewSet(viewsets.ModelViewSet):
    queryset = DonationMethod.objects.all()
    serializer_class = DonationMethodSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
