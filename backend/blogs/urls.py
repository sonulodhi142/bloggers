from django.contrib import admin
from django.urls import path
from .views import BlogsViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("", BlogsViewSet, '')
urlpatterns = router.urls




# urlpatterns = [
#     path('blogs/', BlogsViewSet.as_view(), name='blogsView')
# ]