from django.shortcuts import render
from .models import*
from django.http import HttpResponse

def index(request):
    return render( request, "index.html")

def about(request):
    return render( request, "about.html")

def blog1_1(request):
    return render( request, "blog1_1.html")

def blog1_2(request):
    return render( request, "blog1_2.html")

def blog1(request):
    return render( request, "blog1.html")

def blog2_1(request):
    return render( request, "blog2_1.html")

def  blog2(request):
    return render( request, " blog2.html")

def  blog2_2(request):
    return render( request, " blog2_2.html")


def cart(request):
    return render( request, "cart.html")

def checkout(request):
    return render( request, "checkout.html")

def contact(request):
    return render( request, "contact.html")

def contact2(request):
    return render( request, "contact2.html")

def service_single(request):
    return render( request, "service_single.html")