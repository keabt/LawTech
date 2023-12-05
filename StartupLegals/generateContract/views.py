from django.shortcuts import render, get_object_or_404
from django.views.decorators.csrf import csrf_exempt

from .serializers import ContractSerializer, GameSerializer, GamerSerializer
from .models import Contract, Gamer, Game, ContractGames
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

#API views for contracts
@api_view(['GET', 'POST'])
def contract_list(request):
    if request.method == 'GET':
        contracts = Contract.objects.all()
        serializer = ContractSerializer(contracts, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ContractSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
@api_view(['GET', 'PUT', 'DELETE'])
def contract_detail(request, pk):
    contract = get_object_or_404(Contract, pk=pk)

    if request.method == 'GET':
        serializer = ContractSerializer(contract)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = ContractSerializer(contract, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    elif request.method == 'DELETE':
        contract.delete()
        return Response(status=204)
    
# API views for gamers
@api_view(['GET'])
def gamer_list(request):
    if request.method == 'GET':
        gamers = Gamer.objects.all()
        serializer = GamerSerializer(gamers, many=True)
        return Response(serializer.data)
@api_view(['GET'])
def gamer_detail(request, pk):
    if request.method == 'GET':
        gamer = get_object_or_404(Gamer, pk=pk)
        serializer = GamerSerializer(gamer)
        return Response(serializer.data)

#API views for games
@api_view(['GET'])
def game_list(request):
    if request.method == 'GET':
        games = Game.objects.all()
        serializer = GameSerializer(games, many=True)
        return Response(serializer.data)
@api_view(['GET'])
def game_detail(request, pk):
    if request.method == 'GET':
        game = get_object_or_404(Game, pk=pk)
        serializer = GameSerializer(game)
        return Response(serializer)

    

# Information
    # list - Displays a list of all object instances
    # detail - Displays details of a specific object instance
    # create - Handles the creation of a new object instance
    # update  - Handles the updating of an existing object instance
    # delete - Handles the deletion of an existing object instance


