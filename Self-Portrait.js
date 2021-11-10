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
rect(200, 250, 81, 100);

//face
stroke(237, 201, 240);
ellipse(200, 154, 145, 175); 
arc(177, 189, 80, 100, 86, 168);
arc(223, 188, 80, 100, 15, 89);
arc(199, 235, 46, 21, 12, 169);

//nose
stroke(213, 161, 217);
line(201, 143, 208, 176);
arc(199, 173, 18, 15, 0, 180);

//fringe
noStroke();
fill(230, 214, 41);
arc(235, 70, 78, 57, 51, 202);
arc(159, 70, 76, 59, -36, 120);
stroke(0, 0, 0);

//eyes
fill(255, 255, 255);
noStroke();
ellipse(167, 143, 43, 30);
ellipse(229, 143, 43, 30);

//pupils
noStroke();
fill(45, 163, 116);
ellipse(163,146,18,18);
ellipse(226,146,18,18);
fill(0, 0, 0);
ellipse(163,146,10,10);
ellipse(226,146,10,10);

//mouth
stroke(213, 161, 217);
noFill();
strokeWeight(5);
arc(200, 198, 47, 24, 0, 180);

//eyebrows
strokeWeight(5);
stroke(215,215,215);
line(150, 120, 172, 115);
line(247, 118, 223, 115);
