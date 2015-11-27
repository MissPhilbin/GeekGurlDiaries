from gpiozero import LED
import time
import random
​
nose = LED(25)
left = LED(23)
right = LED(24)
leds = [LED(7), LED(8), LED(9), LED(22), LED(18), LED(17)]
​
left.off()
right.off()
time.sleep(1)
nose.blink()
left.on()
right.on()
​
def sparkle():
    for i in range(25):
        result = random.choice(leds)
        result.on()
        time.sleep(0.2)
        result.off()
​
while True:
    sparkle()        
    time.sleep(0.2)
