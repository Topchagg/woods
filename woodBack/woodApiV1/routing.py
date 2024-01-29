from django.urls import re_path

from .consumer import updatesConsumer

urlpatterns = [
    re_path(r'ws/updates/$', updatesConsumer.as_asgi()),
]