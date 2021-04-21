from django.db import models

# Create your models here.

# TODO: update form model to reflect selector choices

class Form(models.Model):
  skills = models.CharField(max_length=50)
  techs = models.CharField(max_length=50)
  tell_us = models.TextField()

  def _str_(self):
    return self.tell_us