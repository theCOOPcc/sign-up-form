from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from rest_framework import viewsets
from .serializers import FormSerializer
from .models import Form

import logging
import urllib.request
import os

# Create your views here.
class FormView(viewsets.ModelViewSet):
  serializer_class = FormSerializer
  queryset = Form.objects.all()

# TODO: need to figure out this cross site request forgery stuff
# @csrf_exempt
class FrontEndAppView(View):
  def get(self, request):
    print (os.path.join(settings.REACT_APP_DIR, 'build', 'index.html'))
    try: 
      with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
        return HttpResponse(f.read())
    except FileNotFoundError:
      logging.exception ('Production build not found')
      return HttpResponse(status=501)