from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

class indexApiView(APIView):
    def get(self,request):
        return Response({'status':200,'msg':'success'})