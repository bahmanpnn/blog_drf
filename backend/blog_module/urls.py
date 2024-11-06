from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, CommentViewSet, CategoryViewSet
from . import views


router = DefaultRouter()
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'categories', CategoryViewSet)

app_name='blog_module'
urlpatterns = [
    # path('',views.indexApiView.as_view(),name='index'),
    path('api/', include(router.urls)),
]

# app_name='blog_module'
# urlpatterns = [
#     path('',views.indexApiView.as_view(),name='index'),
#     # path('posts/', views.PostListCreate.as_view(), name='post_list_create'),
#     # path('posts/<int:pk>/', views.PostRetrieveUpdateDestroy.as_view(), name='post_retrieve_update_destroy'),

# ]
