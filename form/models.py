from django.db import models

# Create your models here.

# TODO: update form model to reflect selector choices

class Form(models.Model):
  role = models.CharField(max_length=50, default='', blank=True)
  first_name = models.CharField(max_length=50, default='', blank=True)
  last_name = models.CharField(max_length=50, default='', blank=True)
  email = models.EmailField(max_length=254, default='', blank=True)
  linkedin = models.CharField(max_length=254, default='', blank=True)
  github = models.CharField(max_length=254, default='', blank=True)
  portfolio = models.CharField(max_length=254,default='', blank=True)
  engineer_skillset = models.CharField(max_length=50, default='', blank=True)
  engineer_techs = models.CharField(max_length=50, default='', blank=True)
  why_join = models.TextField(default='')
  design_skillset = models.CharField(max_length=50, default='', blank=True)
  design_techs = models.CharField(max_length=50, default='', blank=True)
  data_sci_skillset = models.CharField(max_length=50, default='', blank=True)
  bootcamps = models.CharField(max_length=50, default='', blank=True)
  help_with = models.CharField(max_length=50, default='', blank=True)
  avail_dates = models.CharField(max_length=50, default='', blank=True)
  pronouns = models.CharField(max_length=50, default='', blank=True)

  def _str_(self):
    return self.last_name