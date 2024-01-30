from django.apps import AppConfig


class Woodapiv1Config(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'woodApiV1'

    def ready(self):
        import woodApiV1.models
