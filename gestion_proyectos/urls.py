from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static  # ← faltaban estos imports

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('galeria.urls')),
]

# Esto sirve los archivos de imagen en desarrollo
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
