from rest_framework import serializers
from . import models


# class StudentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = models.Student
#         fields = ['Student_name','Registration_no','Fathername','Birthday','Qualification','course']
class DeparmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Deparments
        fields =['DeparmentId','DeparmentName']


# class ClassSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = models.Course
#         fields = ['Title','Total_mark']
class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Employees
        fields =['EmployeeId','EmployeeName','Deparment','DateOfJoining','PhotoFildName']        