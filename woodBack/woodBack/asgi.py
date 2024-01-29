import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from django.urls import re_path

from woodApiV1.consumer import updatesConsumer

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'woodBack.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(
            [
                re_path(r'ws/updates/$', updatesConsumer.as_asgi())
            ]
        )
    ),
})