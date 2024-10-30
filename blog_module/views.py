from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from .models import Post
from .serializers import PostSerializer


class indexApiView(APIView):
    def get(self,request):
        return Response({'status':200,'msg':'success'})
    

class PostListCreate(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer