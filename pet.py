#!/bin/python3
from sense_hat import SenseHat
from time import sleep

sense = SenseHat()

p = (179, 66, 245)
y = (245, 242, 66)
g = (36, 143, 100)
r = (143, 36, 36)
b = (2, 155, 250)
e = (0, 0, 0)

pan = [
  e, e, e, e, e, e, e, e,
  p, e, e, e, e, e, e, e,
  e, p, e, e, p, e, e, e,
  e, p, g, g, p, y, y, e,
  e, g, g, g, y, e, y, g,
  e, g, g, g, g, y, y, e,
  e, g, e, g, e, g, e, e,
  e, e, e, e, e, e, e, e
  ]

pan2 = [
  e, e, e, e, e, e, e, e,
  e, e, p, e, e, e, e, e,
  e, p, e, e, p, e, e, e,
  e, p, g, g, p, y, y, e,
  e, g, g, g, y, e, y, g,
  e, g, g, g, g, y, y, e,
  e, e, g, e, g, e, e, e,
  e, e, e, e, e, e, e, e
  ]  

hot = [
  e, e, e, e, e, e, e, e,
  r, e, e, e, e, e, e, e,
  e, r, e, e, r, e, e, e,
  e, r, r, r, r, r, r, e,
  e, r, r, r, r, e, r, r,
  e, r, r, r, r, r, r, e,
  e, r, e, r, e, r, e, e,
  e, e, e, e, e, e, e, e
  ]
  
cold = [
  e, e, e, e, e, e, e, e,
  b, e, e, e, e, e, e, e,
  e, b, e, e, b, e, e, e,
  e, b, b, b, b, b, b, e,
  e, b, b, b, b, e, b, b,
  e, b, b, b, b, b, b, e,
  e, b, e, b, e, b, e, e,
  e, e, e, e, e, e, e, e
  ]  


def walking():
  for i in range(3):  
    sense.set_pixels(pan)
    sleep(1)
    sense.set_pixels(pan2)
    sleep(1)

while True:
  if sense.temp > 35: 
    sense.set_pixels(hot)
  elif sense.temp < 5:
    #sense.clear()
    sense.set_pixels(cold)
  else:
    walking()
