from gpiozero import MotionSensor
import picamera
import time
​
pir = MotionSensor(4)
​
with picamera.PiCamera() as camera:
    pic = 1
    while True:
        pir.wait_for_motion()
        camera.capture('/home/pi/santa/image%03d.jpg' % pic)
        print("gotcha!")
        pic += 1
        time.sleep(8)
