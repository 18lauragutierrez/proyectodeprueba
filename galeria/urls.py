from django.urls import path, include
from rest_framework import routers
from .views import ImagenViewSet

router = routers.DefaultRouter()
router.register(r'api/imagenes', ImagenViewSet, basename='imagenes')

urlpatterns = [
    path('', include(router.urls)),
]
