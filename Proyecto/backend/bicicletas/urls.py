from django.urls import path
from .views import bycicle
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('obtenerTodas/',csrf_exempt(bycicle))
]