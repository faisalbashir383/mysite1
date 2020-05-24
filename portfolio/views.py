from django.shortcuts import render
from .models import Messages
def index(request):
    return render(request,'index.html')


def get_message(request):
    if request.method =='POST':
       print('formis submitted')
       name= request.POST.get('name','')
       email= request.POST.get('email','')
       phone= request.POST.get('phone','')
       message= request.POST.get('message','')
    #    print(name,email,phone,message)
       messages  = Messages(name=name,email= email,phone = phone,message = message)
       messages.save()    
    return render(request,'index.html')

