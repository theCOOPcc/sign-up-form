from django.contrib import admin
from .models import Form

class FormAdmin(admin.ModelAdmin):
  list_display = ('id', 'first_name', 'last_name', 'email', 'pronouns', 'why_join', 'linkedin', 'github', 'portfolio', 'engineer_skillset', 'engineer_techs', 'design_skillset', 'design_techs', 'data_sci_skillset', 'bootcamps', 'help_with', 'avail_dates')

# Register your models here.

admin.site.register(Form, FormAdmin)