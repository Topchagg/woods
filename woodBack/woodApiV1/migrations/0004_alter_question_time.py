# Generated by Django 5.0.1 on 2024-01-25 15:12

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('woodApiV1', '0003_alter_question_telnumb'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='time',
            field=models.TimeField(default=django.utils.timezone.now),
        ),
    ]