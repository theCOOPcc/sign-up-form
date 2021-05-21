from django.contrib.postgres.fields import ArrayField
from django.db import models

# Create your models here.

class Form(models.Model):
  first_name = models.CharField(max_length=50, default='', blank=True)
  last_name = models.CharField(max_length=50, default='', blank=True)
  email = models.EmailField(max_length=254, default='', blank=True)
  linkedin = models.CharField(max_length=254, default='', blank=True)
  github = models.CharField(max_length=254, default='', blank=True)
  portfolio = models.CharField(max_length=254,default='', blank=True)
  avail_dates = models.CharField(max_length=50, default='', blank=True)
  role = models.CharField(max_length=50, default='', blank=True)
  pronouns = models.CharField(max_length=50, default='', blank=True)
  bootcamps = models.CharField(max_length=50, default='', blank=True)
  why_join = ArrayField(models.CharField(max_length=100, blank=True), default=list, blank=True)
  help_with = ArrayField(models.CharField(max_length=100, blank=True), default=list, blank=True)
  engineer_skillset = ArrayField(models.CharField(max_length=64, blank=True), default=list, blank=True)
  engineer_techs = ArrayField(models.CharField(max_length=64, blank=True), default=list, blank=True)
  design_skillset = ArrayField(models.CharField(max_length=64, blank=True), default=list, blank=True)
  design_techs = ArrayField(models.CharField(max_length=64, blank=True), default=list, blank=True)
  data_sci_skillset = ArrayField(models.CharField(max_length=64, blank=True), default=list, blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)


  @property
  def emailQuery(self):
    # return "%s"%(self.email)
    return self.email
    
  def __str__(self):
    return self.first_name