from django.urls import path
from . import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('depa/', views.deparmen_get_tApi,name="deparmen_get_tApi"),
    path('depa/<int:empid>',views.deparment_create_Api,name="deparment_create_Api"),
    path('emp/', views.Employees_get_tApi,name="Employees_get_tApi"),
    path('emp/<int:empid>',views.Employees_create_Api,name="Employees_create_Api"),
    
]
