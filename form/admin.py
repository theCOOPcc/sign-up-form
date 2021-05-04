from django.contrib import admin
from django.contrib.admin import SimpleListFilter
from .models import Form


class EmailFilter(SimpleListFilter):
  title ='Email Filter'
  parameter_name='email'

  def lookups(self, request, model_admin):
    return (
      ('has_email', 'has_email'),
      ('no_email', 'no_email')
    )

  def queryset(self, request, queryset):
    if not self.value():
      return queryset
    if self.value().lower() == 'has_email':
      return queryset.exclude(email='')
    if self.value().lower() == 'no_email':
      return queryset.filter(email='')
class FormAdmin(admin.ModelAdmin):
  list_display = ('id', 'first_name', 'last_name', 'email', 'pronouns', 'why_join', 'linkedin', 'github', 'portfolio', 'engineer_skillset', 'engineer_techs', 'design_skillset', 'design_techs', 'data_sci_skillset', 'bootcamps', 'help_with', 'avail_dates', 'created_at', 'updated_at')
  list_filter = ('first_name', EmailFilter)
  search_fields = ('first_name', 'last_name', 'email', 'pronouns', 'why_join', 'linkedin', 'github', 'portfolio', 'engineer_skillset', 'engineer_techs', 'design_skillset', 'design_techs', 'data_sci_skillset', 'bootcamps', 'help_with', 'avail_dates', 'created_at', 'updated_at')

# Register your models here.

admin.site.register(Form, FormAdmin)