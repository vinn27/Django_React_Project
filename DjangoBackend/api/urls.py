from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('anime/', views.AnimeList.as_view())
]
