from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def area_chart(request):
    return render(request, 'area_chart.html')

def data_tables(request):
    return render(request, 'data_tables.html')
