# Generated by Django 3.1.1 on 2021-05-21 02:35

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0003_form_help_with'),
    ]

    operations = [
        migrations.AlterField(
            model_name='form',
            name='why_join',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=100), blank=True, default=list, size=None),
        ),
    ]
