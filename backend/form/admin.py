from django.contrib import admin
from .models import Form

class FormAdmin(admin.ModelAdmin):
  list_display = ('skills', 'techs', 'tell_us')

# Register your models here.

admin.site.register(Form, FormAdmin)