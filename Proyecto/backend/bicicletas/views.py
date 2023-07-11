from django.shortcuts import render
from .models import Bicycle
from .serializers import BycicleSerializer
from django.http import JsonResponse
from rest_framework import status
from rest_framework.parsers import JSONParser

def bycicle(request):
   if request.method == 'GET':
      filtrado = Bicycle.objects.all()
      serializados = BycicleSerializer(filtrado, many=True )
      return JsonResponse(serializados.data ,status = status.HTTP_200_OK, safe=False)
   if request.method == 'POST':
      datos = JSONParser().parse(request)
      serializados = BycicleSerializer(data=datos)
      if serializados.is_valid():
         serializados.save()
         return JsonResponse(serializados.data, status = status.HTTP_200_OK)
      return JsonResponse(serializados.errors, status = status.HTTP_400_BAD_REQUEST)
   
       
 

# Create your views here.
