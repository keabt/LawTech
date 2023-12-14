from rest_framework import serializers
from .models import Contract, ContractGames, Gamer, Game, ContractGames

class ContractSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contract
        fields = '__all__'

class GamerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gamer
        fields = '__all__'

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'

class ContractGamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContractGames
        fields = '__all__'
