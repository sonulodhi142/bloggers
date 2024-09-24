from rest_framework.generics import ListAPIView, CreateAPIView
from .models import Blogs
from .serializers import BlogsSerializer
from rest_framework.viewsets import ViewSet
from rest_framework import permissions
from rest_framework.response import Response

# Create your views here.

# class BlogsView(ListAPIView):
#     queryset = Blogs.objects.all()
#     serializer_class = BlogsSerializer


class BlogsViewSet(ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Blogs.objects.all()
    serializer_class = BlogsSerializer

    def list(self, request):
        serializer = BlogsSerializer(self.queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        item = self.queryset.get(pk=pk)
        serializer = self.serializer_class(item)
        return Response(serializer.data)
    
    def create(self, request):
        serializer = self.serializer_class(data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response({"msg": "data not added", "error": serializer.errors})

    def update(self, request, pk=None):
        serializer = self.serializer_class( data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response({"msg": "data not added", "error": serializer.errors})

    def destroy(self, request, pk=None):
        item = self.queryset.get(pk=pk)     
        item.delete()
        return Response({"msg": "item deleted"})



