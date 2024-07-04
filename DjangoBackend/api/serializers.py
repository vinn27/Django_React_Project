from rest_framework import serializers
from .models import Anime


class AnimeSerializers(serializers.ModelSerializer):
    class Meta:
        model = Anime
        fields = ['id', 'anime_name', 'anime_year']
