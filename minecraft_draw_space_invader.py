""" Draws a space invader on a wall from the origin
Initial code for pygame by Carrie Anne Philbin
http://www.youtube.com/watch?v=b84EywkQ3HI&feature=youtu.be
Minecraft version by Andrew Robinson
"""
###just trying put the pull request### 
import mcpi.block
import mcpi.minecraft
if __name__ == '__main__':
    global mc
    mc = mcpi.minecraft.Minecraft.create()
 
    #clear an area of ground
    # air -- clear and area (two corners of a cube)
    mc.setBlocks(-20, 0, -20, 20, 20, 20, mcpi.block.AIR.id)
    # ground
    mc.setBlocks(-20, -20, -20, 20, 0, 20, mcpi.block.DIRT.id)
 
 
r = 2
w = 1
 
data = [
  [ w, w, r, r, r, r, r, w, w ],
  [ w, w, r, w, r, w, r, w, w ],
  [ w, w, r, r, r, r, r, w, w ],
  [ w, r, r, r, w, r, r, r, w ],
  [ r, w, w, r, r, r, w, w, r ],
  [ r, r, w, w, w, w, w, r, r ]
  ]
 
for y, row in enumerate(data):
  for x, colour in enumerate(row):
    mc.setBlock(x,y,0,mcpi.block.WOOL.id,colour)
 
mc.postToChat("Drawn bitmap")
