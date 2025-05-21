from django.shortcuts import render
from django.http import JsonResponse
from random import randint
from api.models import totalViewsModel, MostWatchedVideos
# Create your views here.

def total_views(request):
    queryset = totalViewsModel.objects.all()
    dct = {
        "labels": [],
        "data": []
    }
    for i in queryset:
        dct["labels"].append(i.label)
        dct["data"].append(i.views)

    print(dct)

    
    return JsonResponse(
        dct   
    )

def dataTable_api(request):
    querySet = MostWatchedVideos.objects.all()
    dct = {
        "title" : [],
        "published_date" : [],
        "views_count" : []
    }

    for i in querySet:
        dct["title"].append(i.title)
        dct["published_date"].append(i.published_date)
        dct["views_count"].append(i.views_count)
    print(dct)
    return JsonResponse(dct)