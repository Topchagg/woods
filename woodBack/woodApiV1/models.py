from django.db import models


class wood(models.Model):
    name = models.CharField(max_length=50)
    image = models.URLField()
    commonCharacterics = models.JSONField()
    
class question(models.Model):
    name = models.CharField(max_length=50)
    telNumb = models.CharField(max_length=13)
    text = models.CharField(max_length=500)
    time = models.TimeField()

class ourWork(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    image = models.URLField()

class techInfo(models.Model):
    supportTel = models.CharField(max_length=10)
    adress = models.URLField()