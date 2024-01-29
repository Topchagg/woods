from django.db import models
from django.utils import timezone
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.serializers import serialize
from channels.layers import get_channel_layer
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
    

@receiver(post_save, sender=wood)
def handle_post_save_wood(sender, instance, **kwargs):
    channel_layer = get_channel_layer()
    queryset = wood.objects.all()
    serialized_data = serialize('json', queryset)
    
    channel_layer.group_send(
        'updates',
        {
            'type': 'notification.message',
            'message': json.dumps({'model': 'wood', 'data': serialized_data})
        }
    )

# Вызываем функцию для отправки уведомления для всех записей wood после каждого сохранения
post_save.connect(handle_post_save_wood, sender=wood)