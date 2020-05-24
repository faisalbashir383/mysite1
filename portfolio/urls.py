from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name='Index'),
    path('get_message/',views.get_message,name='get_message')
    # path('get_message/',views.get_message,name='get_message')
]