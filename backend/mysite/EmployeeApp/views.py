# from django.contrib.auth.models import User, Group
# from rest_framework import viewsets
# from rest_framework import permissions
# from tutorial.quickstart.serializers import UserSerializer, GroupSerializer
from django.shortcuts import render
# from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import DeparmentSerializer,EmployeeSerializer
from .import models
from django.core.files.storage import default_storage
Create your views here.
@api_view(["GET","POST"])
def deparmen_get_tApi(request,):
    if request.method == "GET":
        depa = models.Deparments.objects.all()
        seril = DeparmentSerializer(depa,many=True)
        return Response(data=seril.data)

    if request.method == "POST":
        serlz = DeparmentSerializer(data=request.data)
        if serlz.is_valid():
            serlz.save()
        else:
            return Response(data=seril.errors,status=400)
        respons = models.Deparments.objects.last()      
        result = DeparmentSerializer(respons)  
        return Response(data=result.data)    

   
@api_view(["GET","PUT","DELETE"])
def deparment_create_Api(request,empid):
    if request.method == "GET":
        respons = models.Deparments.objects.get(DeparmentId = empid)
        result  = DeparmentSerializer(respons)
        return Response(data=result.data)

    if request.method == "PUT":
        res = models.Deparments.objects.get(DeparmentId =empid)
        result =DeparmentSerializer(instance=res,data=request.data)
        if result.is_valid():
            result.save()
        else:
            return Response(data=result.errors, status =400)    
        
        A = models.Deparments.objects.get(DeparmentId=empid)
        B = DeparmentSerializer(A)
        return Response(data=B.data)

    if request.method == "DELETE":
        res = models.Deparments.objects.get(DeparmentId=empid)
        res.delete()
        return Response(data=None,status = 400)    



@api_view(["GET","POST"])
def Employees_get_tApi(request,):
    if request.method == "GET":
        depa = models.Employees.objects.all()
        seril = EmployeeSerializer(depa,many=True)
        return Response(data=seril.data)

    if request.method == "POST":
        serlz = EmployeeSerializer(data=request.data)
        if serlz.is_valid():
            serlz.save()
        else:
            return Response(data=serlz.errors,status=400)
        respons = models.Employees.objects.last()      
        result = EmployeeSerializer(respons)  
        return Response(data=result.data)    

@api_view(["GET","PUT","DELETE"])
def Employees_create_Api(request,empid):
    if request.method == "GET":
        respons = models.Employees.objects.get(EmployeeId = empid)
        result  = EmployeeSerializer(respons)
        return Response(data=result.data)

    if request.method == "PUT":
        res = models.Employees.objects.get(EmployeeId =empid)
        result =EmployeeSerializer(instance=res,data=request.data)
        if result.is_valid():
            result.save()
        else:
            return Response(data=result.errors, status =400)    
        
        A = models.Employees.objects.get(EmployeeId=empid)
        B = EmployeeSerializer(A)
        return Response(data=B.data)

    if request.method == "DELETE":
        res = models.Employees.objects.get(EmployeeId=empid)
        res.delete()
        return Response(data=None,status = 400)    


# @csrf_exempt
# def SaveFile(request):
#     file = request.FILES['myFile']
#     file_name = default_storage.save(file.name,file)
#     return Response(data=file_name)


# class UserViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = User.objects.all().order_by('-date_joined')
#     serializer_class = StudentSerializer
#     permission_classes = [permissions.IsAuthenticated]


# class GroupViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows groups to be viewed or edited.
#     """
#     queryset = Group.objects.all()
#     serializer_class = ClassSerializer
#     permission_classes = [permissions.IsAuthenticated]


