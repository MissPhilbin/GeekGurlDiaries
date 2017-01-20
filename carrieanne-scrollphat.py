import sys
import time
import scrollphat

sp = scrollphat

sp.set_brightness(35)
sp.clear()
sp.write_string("  CARRIE ANNE     RASPBERRY Pi   ")

while True:
    try:
        sp.scroll()
        time.sleep(0.1)
    except KeyboardInterrupt:
        sp.clear()
        sys.exit(-1)
