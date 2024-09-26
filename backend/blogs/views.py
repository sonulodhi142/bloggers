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

def fetchBlogs():
    return Blogs.objects.all()

class BlogsViewSet(ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = fetchBlogs()
    serializer_class = BlogsSerializer

    def list(self, request):
        queryset = fetchBlogs()
        serializer = BlogsSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = fetchBlogs()
        item = queryset.get(pk=pk)
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
        item = fetchBlogs().get(pk=pk)

        serializer = self.serializer_class(item, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response({"msg": "data not added", "error": serializer.errors})

    def destroy(self, request, pk=None):
        queryset = fetchBlogs()
        item = queryset.get(pk=pk)     
        item.delete()
        return Response({"msg": "item deleted"})



