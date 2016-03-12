# Sparkles by GeekGurlDiaries
# BBC Microbit Video - https://youtu.be/CTol1mtXm0I 

from microbit import *
import neopixel
import random

np = neopixel.NeoPixel(pin0, 2)

np.clear()

red = (255, 0, 0)
orange = (255, 153, 0)
yellow = (255, 255, 0)
green = (0, 255, 0)
blue = (0, 0, 255)
violet = (255, 0, 255)

colors = [red, orange, yellow, green, blue, violet]
display.show(Image.HEART)

while True:
    np[0] = (random.choice(colors))
    np[1] = (random.choice(colors))
    sleep(1000)
    np.show()
