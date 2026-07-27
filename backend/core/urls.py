from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    HospitalInfoViewSet,
    DoctorViewSet,
    AchievementViewSet,
    DonationCampaignViewSet,
    DonationMethodViewSet,
    ContactMessageViewSet,
)

router = DefaultRouter()
router.register(r'info', HospitalInfoViewSet, basename='hospital-info')
router.register(r'doctors', DoctorViewSet, basename='doctors')
router.register(r'achievements', AchievementViewSet, basename='achievements')
router.register(r'campaigns', DonationCampaignViewSet, basename='campaigns')
router.register(r'donation-methods', DonationMethodViewSet, basename='donation-methods')
router.register(r'contacts', ContactMessageViewSet, basename='contacts')

urlpatterns = [
    path('', include(router.urls)),
]

