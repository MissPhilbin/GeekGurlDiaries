# Geek Gurl Diaries Episode 32
# "Make a Digital Garden with Pibrella" by Carrie Anne Philbin

import pibrella
import time

def turn():
  while True:
    pibrella.output.e.on()
    pibrella.output.e.off()
    time.sleep(0.01)
    if not pibrella.button.read():
      break

while True:
  if pibrella.button.read():
    turn()
