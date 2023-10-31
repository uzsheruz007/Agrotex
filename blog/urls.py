from django.urls import path
from . import views
from .views import index,  about, blog1_1, blog1_2, blog1, blog2_1, blog2_2, blog2, cart, checkout, contact, contact2, service_single, service, shop, shop1, shop2, shop3, single_product, team1, team2, wishlist


urlpatterns = [

    path('', index, name='index'),
    path('about/', about, name='about'),
    path('blog1_1/', blog1_1, name='blog1_1'),
    path('blog1_2/', blog1_2, name='blog1_2'),
    path('blog1/', blog1, name='blog1'),
    path('blog2_1/',  blog2_1, name='blog2_1'),
    path('blog2/',   blog2, name='blog2'),
    path('blog2_2/',   blog2_2, name='blog2_2'),
    path('cart/',  cart, name='cart'),
    path('checkout/',  checkout, name='checkout'),
    path('contact/',  contact,  name='contact'),
    path('contact2/',  contact2, name='contact2'),
    path('service_single/',  service_single, name='service_single'),
    path('service/', service, name='service' ),
    path('shop/', shop, name='shop' ),
    path('shop1/', shop1, name='shop1' ),
    path('shop2/', shop2, name='shop2' ),
    path('shop3/', shop3, name='shop3' ),
    path('single_product', single_product, name='single_product'),
    path('team1/', team1, name='team1' ),
    path('team2/', team2, name='team2' ),
    path('wishlist/', wishlist, name='wishlist' ),

    
]

