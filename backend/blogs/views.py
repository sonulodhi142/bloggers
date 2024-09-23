
from rest_framework.generics import ListAPIView
from .models import Blogs
from .serializers import BlogsSerializer

# Create your views here.

class BlogApi(ListAPIView):
    queryset = Blogs.objects.all()
    serializer_class = BlogsSerializer



