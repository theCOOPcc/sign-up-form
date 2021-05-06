# Generated by Django 3.1.1 on 2021-05-06 21:31

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0006_auto_20210506_2128'),
    ]

    operations = [
        migrations.AlterField(
            model_name='form',
            name='data_sci_skillset',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, default=list, max_length=50), size=None),
        ),
        migrations.AlterField(
            model_name='form',
            name='design_skillset',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, default=list, max_length=50), size=None),
        ),
        migrations.AlterField(
            model_name='form',
            name='design_techs',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, default=list, max_length=50), size=None),
        ),
        migrations.AlterField(
            model_name='form',
            name='engineer_skillset',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, default=list, max_length=50), size=None),
        ),
        migrations.AlterField(
            model_name='form',
            name='engineer_techs',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, default=list, max_length=50), size=None),
        ),
    ]