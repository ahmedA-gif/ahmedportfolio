from django.db import models
class Contact(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField()
    subject=models.CharField(max_length=100)
    message=models.TextField()
    budget = models.CharField(max_length=100, blank=True, null=True)   
    timeline = models.CharField(max_length=100, blank=True, null=True)
    created_date=models.DateTimeField(auto_now_add=True)
    is_read=models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} - {self.subject}"
    class Meta:
        ordering=['-created_date']

class Service(models.Model):
    title=models.CharField(max_length=100)
    description=models.TextField()
    icon=models.CharField(max_length=100)
    is_active=models.BooleanField(default=True)

    def __str__(self):
        return self.title