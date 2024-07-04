from .serializers import AnimeSerializers
from rest_framework.generics import ListAPIView
from .models import Anime


# Create your views here.
class AnimeList(ListAPIView):
    queryset = Anime.objects.all()
    serializer_class = AnimeSerializers
