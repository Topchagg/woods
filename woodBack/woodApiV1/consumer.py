import json
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import *
from .serializers import *


class updatesConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        print('Websocket connected')
        await self.accept()

        await self.channel_layer.group_add('updates', self.channel_name)

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard('updates', self.channel_name)

    async def send_notification(self, event):
        message = event['message']
        print(event)
        await self.send(text_data=json.dumps({'type': 'notification.message', 'message': message}))
       
