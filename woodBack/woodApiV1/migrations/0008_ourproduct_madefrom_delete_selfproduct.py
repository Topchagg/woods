# Generated by Django 5.0.1 on 2024-01-31 17:09

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('woodApiV1', '0007_rename_ourwork_ourproduct'),
    ]

    operations = [
        migrations.AddField(
            model_name='ourproduct',
            name='madeFrom',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='woodApiV1.wood'),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='selfProduct',
        ),
    ]
