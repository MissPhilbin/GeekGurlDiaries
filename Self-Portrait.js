rectMode(CENTER);
background(0, 187, 255);

//back hair
noStroke();
fill(230, 214, 41); //
ellipse(200, 162, 190, 228);
ellipse(200, 227, 186, 125);

//neck
fill(247, 234, 247);
noStroke();
rect(200, 250, 59, 100);

//face
stroke(237, 201, 240);
ellipse(200, 154, 145, 175); 

//nose
stroke(213, 161, 217);
line(201, 143, 208, 176);
arc(199, 173, 18, 15, 0, 180);

//fringe
noStroke();
fill(230, 214, 41);
arc(235, 76, 102, 82, 37, 222);
arc(154, 81, 76, 59, -36, 120);
stroke(0, 0, 0);

//eyes
fill(255, 255, 255);
noStroke();
ellipse(167, 151, 40, 21);
ellipse(229, 151, 40, 21);
fill(247, 234, 247);
stroke(237, 201, 240);
arc(229, 147, 45, 16, -160, 17);
arc(166, 147, 45, 16, -195, -15);

//pupils
noStroke();
fill(45, 163, 116);
ellipse(163,155,15,15);
ellipse(226,155,15,15);
fill(0, 0, 0);
ellipse(163,155,8,8);
ellipse(226,155,8,8);

//mouth
stroke(213, 161, 217);
noFill();
strokeWeight(5);
arc(200, 198, 47, 24, 0, 180);

//eyebrows
strokeWeight(5);
stroke(215,215,215);
line(150, 129, 174, 126);
line(246, 129, 223, 125);

//Hoodie
fill(255, 153, 202);
rect(199, 347, 205, 150, 20);
fill(255, 204, 229);
rectMode(CENTER);
triangle(142, 236, 104, 304, 243, 334);
triangle(257, 243, 302, 317, 181, 347);
fill(255);
ellipse(250, 351, 15, 15);
ellipse(152, 351, 15, 15);
rect(249, 310, 8, 65, 20);
rect(152, 310, 8, 65, 20);

