from django.db import models
from django.utils import timezone
from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

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

    


def sendNotification(model, url):
    channel = get_channel_layer()
    async_to_sync(channel.group_send)(
        'updates', {
            'type':'send_notification',
            'message': {'url':url,'model':model}
        }
    )

@receiver(post_save,sender=wood)
@receiver(post_delete,sender=wood)
def handleWoodSignal(**kwargs):
    sendNotification('woods','http://127.0.0.1:8000/all-woods')


@receiver(post_save,sender=ourProduct)
@receiver(post_delete,sender=ourProduct)
def handleProductSignal(**kwargs):
    sendNotification('products','http://127.0.0.1:8000/all-products')


post_save.connect(handleWoodSignal, sender=wood)
post_delete.connect(handleWoodSignal,sender=wood)

post_save.connect(handleProductSignal,sender=ourProduct)
post_save.connect(handleProductSignal,sender=ourProduct)