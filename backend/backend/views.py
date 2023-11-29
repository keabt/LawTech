from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate, login
import json

from .models import USER


@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        firstName = data['firstName']
        lastName  = data['lastName']
        userType = data['userType']
        email = data['email']
        password = make_password(data['password'])

        user = USER(firstName=firstName, lastName=lastName, userType=userType, email=email, password=password)
        user.save()

        return JsonResponse({'message': 'USER registered successfully'})
    return JsonResponse({'message': 'Invalid request method'})
# login the user
def login_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data['email']
        password = data['password']

        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful'})
        else:
            return JsonResponse({'message': 'Login failed. Please check your credentials.'})
        
    return JsonResponse({'message': 'Invalid request method'})

    