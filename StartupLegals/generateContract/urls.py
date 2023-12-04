"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import *
# from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/contracts/', contract_list.as_view(), name='contract-list'),
    path('api/contracts/<int:pk>', contract_detail.as_view(), name='contract-detail'),
    path('api/gamers/', gamer_list.as_view(), name='gamer-list'),
    path('api/gamers/<int:pk>', gamer_detail.as_view(), name='gamer-detail'),
    path('api/games/', game_list.as_view(), name='game-list'),
    path('api/games/<int:pk>', game_detail.as_view(), name='game-detail'),
]
