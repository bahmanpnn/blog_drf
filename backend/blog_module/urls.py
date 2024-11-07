from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, CommentViewSet, CategoryViewSet,indexApiView,post_detail


router = DefaultRouter()
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'categories', CategoryViewSet)

# app_name='blog_module'
urlpatterns = [
    path('',indexApiView.as_view(),name='index'),
    path('api/', include(router.urls)),
    path('api/posts/<int:pk>/detail/', post_detail, name='post_detail'),
]







# app_name='blog_module'
# urlpatterns = [
#     path('',views.indexApiView.as_view(),name='index'),
#     # path('posts/', views.PostListCreate.as_view(), name='post_list_create'),
#     # path('posts/<int:pk>/', views.PostRetrieveUpdateDestroy.as_view(), name='post_retrieve_update_destroy'),

# ]
