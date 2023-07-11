from django.db import models

# Create your models here.

class Bicycle(models.Model):
    Modelo = models.CharField(max_length=100)
    Caracteristicas = models.CharField(max_length=500)
    Precio = models.PositiveBigIntegerField()
    Descripcion = models.CharField(max_length=500)

  
      
    def __str__(self):
        return f'{self.Modelo} : {self.Caracteristicas} : {self.Precio} : {self.Descripcion}'

