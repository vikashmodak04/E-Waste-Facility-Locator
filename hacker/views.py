from django.shortcuts import render, HttpResponse , redirect
from datetime import datetime
from django.contrib import messages 
from django.contrib.auth import authenticate, login 
from django.contrib.auth.forms import UserCreationForm
import folium

# Create your views here.
def index(request):

    if request.user.is_authenticated:
        return render(request, 'index.html')
    else:
        return redirect('login')  

def about(request):
    return render(request, 'about.html') 

def services(request):
    return render(request, 'services.html')
 

def contact(request):
    return render(request, 'contact.html')

def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')  # Redirect to the home page after successful login
        else:
            messages.error(request, 'Invalid username or password.')
    return render(request, 'login.html')
 
def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}! You can now log in.')
            return redirect('login')
    else:
        form = UserCreationForm()
    return render(request, 'register.html', {'form': form})

def india_map(request):
    return render(request, 'india_map.html')