from django.shortcuts import render
from django.http import HttpResponse
import threading


current_data = None
last_flap = False
threashold = 50

def get_data():
    global current_data
    import serial
    
    port = '/dev/ttyS0'


    ard = serial.Serial(port, 9600)
    
    while True:
        current_data = ard.readline()
        

t = threading.Thread(target=get_data)
t.start()

# Create your views here.

def api(request):
    if last_flap == False and current_data > threashold:
        last_flap = True
        return HttpResponse("flap")
    elif last_flap == True and current_data < threashold:
        last_flap = False
        return HttpResponse("unflap")
    

def index(request):
    return render(request, "index.html")
