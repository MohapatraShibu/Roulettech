from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def get_data(request):
    data = {"message": "Hello from Django!"}
    return Response(data)

@api_view(['POST'])
def submit_data(request):
    submitted_data = request.data
    return Response({"status": "success", "data": submitted_data})
