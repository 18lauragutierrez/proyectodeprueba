from rest_framework import viewsets
from .models import Imagen
from .serializers import ImagenSerializer

class ImagenViewSet(viewsets.ModelViewSet):
    queryset = Imagen.objects.all().order_by('-fecha_subida')
    serializer_class = ImagenSerializer

    # When deleting, also remove the file from storage
    def perform_destroy(self, instance):
        # delete the file (Cloudinary storage or local storage will handle)
        if instance.imagen:
            try:
                instance.imagen.delete(save=False)
            except Exception:
                pass
        instance.delete()
