from django.shortcuts import render
from .serializers import *
from .models import *
from rest_framework.viewsets import ModelViewSet

class question(ModelViewSet):
    queryset = question.objects.all()
    serializer_class = questionSerializer

class wood(ModelViewSet):
    queryset = wood.objects.all()
    serializer_class = woodSerializer

class techInfo(ModelViewSet):
    queryset = techInfo.objects.all()
    serializer_class = techInfoSerializer

class ourWork(ModelViewSet):
    queryset = ourWork.objects.all()
    serializer_class = ourWorkSerializer