
from django.urls import path
from .views import *


urlpatterns = [
    path('contracts/', contract_list, name='contract-list'),
    path('contracts/<int:pk>', contract_detail, name='contract-detail'),
    path('gamers/', gamer_list, name='gamer-list'),
    path('gamers/<int:pk>', gamer_detail, name='gamer-detail'),
    path('games/', game_list, name='game-list'),
    path('games/<int:pk>', game_detail, name='game-detail'),
]
