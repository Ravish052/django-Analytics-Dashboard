from django.urls import path

from api import views

urlpatterns = [
    path('dataTable-api', views.dataTable_api, name = "api-dataTable-api"),
    path('total-views', views.total_views, name = "api-total-views"),
]