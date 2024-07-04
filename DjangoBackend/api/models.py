from django.db import models

class Anime(models.Model):
  anime_name = models.CharField(max_length=255)
  anime_year = models.CharField(max_length=255)
