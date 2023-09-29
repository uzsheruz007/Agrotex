from django.urls import path
from .views import index,  about, blog1_1, blog1_2, blog1, blog2_1, blog2_2, blog2, cart, checkout, contact, contact2, service_single


urlpatterns = [
    path('', index, name='index'),
    path('about/', about, name='about'),
    path('blog1_1/', blog1_1, name='blog1_1'),
    path('blog1_2/', blog1_2, name='blog1_2'),
    path('blog1/', blog1, name='blog1'),
    path('blog2_1/',  blog2_1, name=' blog2_1'),
    path('blog2/',   blog2, name='  blog2'),
    path('blog2_2/',   blog2_2, name='  blog2_2'),
    path('cart/',  cart, name='cart'),
    path('checkout/',  checkout, name=' checkout'),
    path('contact/',  contact, name=' contact'),
    path('contact2/',  contact2, name=' contact2'),
    path('service_single/',  service_single, name=' service_single'),
    
]

