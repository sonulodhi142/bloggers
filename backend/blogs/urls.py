from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('blogApi/', views.BlogApi.as_view(), name='blogApi' )
]