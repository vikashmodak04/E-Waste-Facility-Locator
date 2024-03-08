from django.contrib import admin
from django.urls import path
from hacker import views
from .views import user_login , register
urlpatterns = [
    path("", views.index, name='home'),
    path("about", views.about, name='about'),
    path("services", views.services, name='services'),
    path("contact", views.contact, name='contact'), 
    path('login/', user_login, name='login'),
    path('register/', register, name='register'),
    path('india-map/', views.india_map, name='india_map'),
]