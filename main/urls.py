from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path("api", api, name="api"),
    path("", index, name="index"),
]