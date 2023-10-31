from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class Vedio(models.Model):
    vedio = models.FileField(upload_to="vedio/%y")
    surname = models.CharField(max_length=225, verbose_name="Sarlavha")
    teacher = models.CharField(max_length=225, verbose_name="Izoh")
   
    def __str__(self):
        return self.surname
