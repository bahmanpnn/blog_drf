from django.urls import path
from django.urls import path
from . import views


app_name='blog_module'
urlpatterns = [
    path('',views.indexApiView.as_view(),name='index'),
    path('posts/', views.PostListCreate.as_view(), name='post_list_create'),
    path('posts/<int:pk>/', views.PostRetrieveUpdateDestroy.as_view(), name='post_retrieve_update_destroy'),
]
