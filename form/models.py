from django.contrib.postgres.fields import ArrayField
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
  why_join = models.TextField(default='')
  pronouns = models.CharField(max_length=50, default='', blank=True)
  avail_dates = models.CharField(max_length=50, default='', blank=True)
  help_with = models.CharField(max_length=50, default='', blank=True)
  bootcamps = models.CharField(max_length=50, default='', blank=True)
  engineer_skillset = ArrayField(models.CharField(max_length=50, default=list, blank=True))
  engineer_techs = ArrayField(models.CharField(max_length=50, default=list, blank=True))
  design_skillset = ArrayField(models.CharField(max_length=50, default=list, blank=True))
  design_techs = ArrayField(models.CharField(max_length=50, default=list, blank=True))
  data_sci_skillset = ArrayField(models.CharField(max_length=50, default=list, blank=True))
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)


  @property
  def emailQuery(self):
    # return "%s"%(self.email)
    return self.email
    
  def __str__(self):
    return self.first_name