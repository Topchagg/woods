import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import woodApiV1.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'YourProject.settings')

application = ProtocolTypeRouter({
    'http': get_asgi_application(),
    'websocket': AuthMiddlewareStack(
        URLRouter(
            woodApiV1.routing.urlpatterns
        )
    ),
})