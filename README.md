# gestion_proyectos
Proyecto Django (API) + React (frontend) listo para subir a GitHub y desplegar en Render.

## Características
- Django REST Framework API con app `galeria`
- Modelo `Imagen` que sube archivos a Cloudinary en producción
- React frontend básico en `/frontend` que consume la API
- Configuración para PostgreSQL en Render (usa DATABASE_URL)
- `requirements.txt` y `Procfile` listos

## Uso local (desarrollo)
1. Crear virtualenv e instalar dependencias:
   ```
   python -m venv venv
   source venv/bin/activate  # o venv\Scripts\activate en Windows
   pip install -r requirements.txt
   ```
2. Migrar y ejecutar:
   ```
   python manage.py migrate
   python manage.py runserver
   ```
3. Frontend:
   ```
   cd frontend
   npm install
   npm start
   ```

## Cloudinary
Para producción configura la variable de entorno `CLOUDINARY_URL` o `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`.

## Deploy en Render
- Crea servicio Web para el backend, otro Static Site para el frontend.
- Crea una base de datos PostgreSQL en Render. Render proveerá `DATABASE_URL`.
- Añade variables de entorno: `DJANGO_SECRET_KEY`, `DEBUG=False`, `CLOUDINARY_URL` (o CLOUDINARY_*).
