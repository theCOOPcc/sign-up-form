from rest_framework import serializers
from .models import Form

class FormSerializer(serializers.ModelSerializer):
  class Meta: 
    model = Form
    fields = ('id', 'first_name', 'last_name', 'email', 'pronouns', 'why_join', 'linkedin', 'github', 'portfolio', 'engineer_skillset', 'engineer_techs', 'design_skillset', 'design_techs', 'data_sci_skillset', 'bootcamps', 'help_with', 'avail_dates')