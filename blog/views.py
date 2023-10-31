from django.shortcuts import render
from vedio.models import Vedio
from django.http import HttpResponse
from contact.models import  Contact
from django.contrib.auth import authenticate, login


def index(request):
    return render( request, "index.html")

def about(request):
    return render( request, "about.html")

def blog1_1(request):
    vedio=Vedio.objects.all()
    
    return render( request, "blog1_1.html",{"vedio":vedio})

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
    if request.method == "POST":
        contact=Contact()
        name=request.POST.get('name')
        email=request.POST.get('email')
        subject=request.POST.get('subject')
        messages=request.POST.get('messages')
        contact.name=name
        contact.email=email
        contact.subject=subject
        contact.messages=messages
        contact.save()
        return HttpResponse("<h1> ok </h1>")
    return render(request, 'contact.html')
        
def contact2(request):
    return render( request, "contact2.html")

def service_single(request):
    return render( request, "service_single.html")

def service(request):
    return render( request, "service.html")

def shop(request):
    return render( request, "shop.html")

def shop1(request):
    return render( request, "shop1.html")

def shop2(request):
    return render( request, "shop2.html")

def shop3(request):
    return render( request, "shop3.html")

def shop(request):
    return render( request, "shop.html")

def single_product(request):
    return render( request, "single_product.html")

def team1(request):
    return render( request, "team1.html")

def team2(request):
    return render( request, "team2.html")

def wishlist(request):
    return render( request, "wishlist.html")