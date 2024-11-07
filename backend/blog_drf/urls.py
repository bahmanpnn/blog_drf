from django.contrib import admin
from django.urls import path,include
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('blog_module.urls')),
    # path('',include('blog_module.urls',namespace='blog_module'
    path('api/auth/', include('dj_rest_auth.urls')),  # Login and Logout
    path('api/auth/registration/', include('dj_rest_auth.registration.urls')),  # Registration

    # JWT Token Authentication endpoints
    # path('api/auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
