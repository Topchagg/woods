import json
from channels.generic.websocket import AsyncWebsocketConsumer


class updatesConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

        await self.channel_layer.group_add('updates', self.channel_name)

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard('updates', self.channel_name)

    async def notification_message(self, event):
        message = json.loads(event['message'])
        await self.send(text_data=json.dumps({'type':'notification.message','message':message}))