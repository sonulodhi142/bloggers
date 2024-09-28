from django.db import models

class Blogs(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    image = models.ImageField(upload_to='images/')
    views = models.IntegerField( default=0)
    created_at = models.DateTimeField(auto_now_add=True)  

    def __str__(self):
        return self.title
