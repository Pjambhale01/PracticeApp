from django.db import models
from django.utils import timezone

Create your models here.
class Deparments(models.Model):
    DeparmentId = models.AutoField(primary_key=True)
    DeparmentName = models.CharField(max_length=100)


class Employees(models.Model):
    EmployeeId = models.AutoField(primary_key=True)
    EmployeeName = models.CharField(max_length=100)
    Deparment = models.CharField(max_length=100)
    DateOfJoining = models.DateField()
    PhotoFildName = models.CharField(max_length=100)

# class Course(models.Model):
#     Title = models.TextField(max_length=100)
#     Total_mark = models.IntegerField()
   
   
#    def __init__(self):
#        return self.Title


# class Student(models.Model):
#     Student_name = models.CharField(max_length=100)
#     Registration_no = models.AutoField(primary_key=True)
#     Fathername = models.CharField(max_length=100)
#     Birthday = models.DateTimeField(default=timezone.now())
#     Qualification = models.CharField(max_length=100)
#     course = models.ForeignKey(Blog, on_delete=models.CASCADE, null=True)

#     def __init__(self):
#         return self.Registration_no