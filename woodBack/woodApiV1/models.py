from django.db import models
from django.utils import timezone
from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
import json
import asyncio

class wood(models.Model):
    name = models.CharField(max_length=50)
    image = models.URLField()
    commonCharacterics = models.JSONField()
    
class question(models.Model):
    name = models.CharField(max_length=50)
    telNumb = models.CharField(max_length=13)
    text = models.CharField(max_length=500)
    time = models.DateTimeField(default=timezone.now)

class ourProduct(models.Model):
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
    


@receiver(post_delete, sender=wood)
def sendNotification(sender, instance, **kwargs):
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)('updates', {
        'type': 'send_notification',
        'message': instance.id,
    })

@receiver(post_save, sender=wood)
def sendNotification(sender, instance, **kwargs):
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)('updates', {
        'type': 'send_notification',
        'message': instance.id,
    })

post_save.connect(sendNotification,wood)
post_delete.connect(sendNotification,wood)
post_save.connect(sendNotification,ourProduct)
post_delete.connect(sendNotification,ourProduct)
