from django.db import models
from django.utils import timezone


class wood(models.Model):
    name = models.CharField(max_length=50)
    image = models.URLField()
    commonCharacterics = models.JSONField()
    
class question(models.Model):
    name = models.CharField(max_length=50)
    telNumb = models.CharField(max_length=13)
    text = models.CharField(max_length=500)
    time = models.DateTimeField(default=timezone.now)

class ourWork(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    image = models.URLField()

class techInfo(models.Model):
    supportTel = models.CharField(max_length=10)
    adress = models.URLField()

class selfProduct(models.Model):
    image = models.URLField()
    price = models.IntegerField()
    name = models.CharField(max_length=20)
    wood = models.ForeignKey(wood, on_delete=(models.CASCADE))
    