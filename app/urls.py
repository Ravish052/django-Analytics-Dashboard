from django.urls import path
from . import views

urlpatterns = [
    path("",views.index,name = "app-index"),
    path("area-chart",views.area_chart,name = "app-area_chart"),
    path("data-tables",views.data_tables,name = "app-data_table"),
]    