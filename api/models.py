from django.db import models

# Create your models here.
class totalViewsModel(models.Model):
    label = models.CharField(max_length=100)
    views = models.IntegerField()
    
class MostWatchedVideos(models.Model):
    title = models.CharField(max_length=100)
    published_date = models.DateField()
    views_count = models.IntegerField(default=0)
    
