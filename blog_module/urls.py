from django.urls import path
from . import views

app_name='blog_module'
urlpatterns = [
    path('',views.indexApiView.as_view(),name='index'),
]
