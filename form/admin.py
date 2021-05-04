from django.contrib import admin
from django.contrib.admin import SimpleListFilter
from .models import Form
from django.utils.translation import gettext_lazy as _


class EmailFilter(SimpleListFilter):
  title ='Email Filter'
  parameter_name='email'

  def lookups(self, request, model_admin):
    return (
      ('has_email', _('has email')),
      ('no_email', _('no email'))
    )

  def queryset(self, request, queryset):
    if not self.value():
      return queryset
    if self.value().lower() == 'has_email':
      return queryset.exclude(email='')
    if self.value().lower() == 'no_email':
      return queryset.filter(email='')

class RoleFilter(SimpleListFilter):
  title ='Role Filter'
  parameter_name='role'

  def lookups(self, request, model_admin):
    return (
      ('Designer', _('Designer')),
      ('Engineer', _('Engineer')),
      ('Data Scientist', _('Data Scientist')),
      ('Mentor', _('Mentor'))
    )

  def queryset(self, request, queryset):
    if not self.value():
      return queryset
    if self.value() == 'Engineer':
      return queryset.filter(role='Engineer')
    if self.value() == 'Designer':
      return queryset.filter(role='Designer')
    if self.value() == 'Data Scientist':
      return queryset.filter(role='Data Scientist')
    if self.value() == 'Mentor':
      return queryset.filter(role='Mentor')
class FormAdmin(admin.ModelAdmin):
  list_display = ('id', 'first_name', 'last_name', 'role', 'email', 'pronouns', 'why_join', 'linkedin', 'github', 'portfolio', 'engineer_skillset', 'engineer_techs', 'design_skillset', 'design_techs', 'data_sci_skillset', 'bootcamps', 'help_with', 'avail_dates', 'created_at', 'updated_at')
  list_filter = (RoleFilter, EmailFilter)
  search_fields = ('first_name', 'last_name', 'email', 'pronouns', 'why_join', 'linkedin', 'github', 'portfolio', 'engineer_skillset', 'engineer_techs', 'design_skillset', 'design_techs', 'data_sci_skillset', 'bootcamps', 'help_with', 'avail_dates', 'created_at', 'updated_at')

# Register your models here.

admin.site.register(Form, FormAdmin)