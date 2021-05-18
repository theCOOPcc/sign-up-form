# Generated by Django 3.1.1 on 2021-05-10 04:29

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='form',
            name='help_with',
        ),
        migrations.AlterField(
            model_name='form',
            name='data_sci_skillset',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=64), blank=True, default=list, size=None),
        ),
        migrations.AlterField(
            model_name='form',
            name='design_skillset',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=64), blank=True, default=list, size=None),
        ),
        migrations.AlterField(
            model_name='form',
            name='design_techs',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=64), blank=True, default=list, size=None),
        ),
        migrations.AlterField(
            model_name='form',
            name='engineer_skillset',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=64), blank=True, default=list, size=None),
        ),
        migrations.AlterField(
            model_name='form',
            name='engineer_techs',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=64), blank=True, default=list, size=None),
        ),
        migrations.AlterField(
            model_name='form',
            name='why_join',
            field=models.TextField(blank=True, default=''),
        ),
    ]