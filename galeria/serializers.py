from rest_framework import serializers
from .models import Imagen

class ImagenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Imagen
        fields = ['id', 'titulo', 'imagen', 'fecha_subida']
