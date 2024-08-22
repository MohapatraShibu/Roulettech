from django.urls import path
from .views import get_data, submit_data

urlpatterns = [
    path('data/', get_data),
    path('submit/', submit_data),
]
