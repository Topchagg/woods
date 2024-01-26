from rest_framework.serializers import ModelSerializer
from .models import *


class questionSerializer(ModelSerializer):

    class Meta: 
        model = question
        fields = ['pk','name','telNumb','text','time']
        read_only_fields = ['pk','time']

class woodSerializer(ModelSerializer):

    class Meta:
        model = wood
        fields = ['pk','name','image','commonCharacterics']

class techInfoSerializer(ModelSerializer):
    
    class Meta:
        model = techInfo
        fields = ['supportTel','adress']

class ourWorkSerializer(ModelSerializer):

    class Meta:
        model = ourWork
        fields = ['pk','name','price','image']