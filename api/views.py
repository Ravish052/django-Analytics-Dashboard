from django.shortcuts import render
from django.http import JsonResponse
from random import randint
# Create your views here.

def total_views(request):
    return JsonResponse({
        "labels": ["January", "February", "March", "April", "May", "June"],
        "data" : [randint(1000*1,1000*(i+1)) for i in range(6)]
        
        
    })
