from django.db import models

class Messages(models.Model):
      name = models.CharField(max_length=30)
      email = models.CharField(max_length=30)
      phone = models.CharField(max_length=30)
      message = models.CharField(max_length=30)

      def __str__(self):
        return self.name