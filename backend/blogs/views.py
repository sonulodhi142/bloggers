
from rest_framework.generics import ListAPIView, CreateAPIView
from .models import Blogs
from .serializers import BlogsSerializer

# Create your views here.

class BlogsView(ListAPIView):
    queryset = Blogs.objects.all()
    serializer_class = BlogsSerializer



