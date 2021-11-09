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
ellipse(200, 150, 150, 175); 

//nose
stroke(213, 161, 217);
arc(199, 173, 18, 15, 0, 180);

//fringe
noStroke();
fill(230, 214, 41);
rect(213, 81, 83, 39, 158);
stroke(0, 0, 0);

//eyes
fill(255, 255, 255);
noStroke();
ellipse(167, 143, 50, 50);
ellipse(229, 143, 50, 50);

//pupils
noStroke();
fill(45, 163, 116);
ellipse(163,147,25,25);
ellipse(226,147,25,25);
fill(0, 0, 0);
ellipse(163,147,15,15);
ellipse(226,147,15,15);

//mouth
stroke(213, 161, 217);
noFill();
strokeWeight(5);
arc(200, 198, 47, 24, 0, 180);

//eyebrows
strokeWeight(5);
stroke(215,215,215);
line(150, 110, 175, 110);
line(255, 110, 231, 110);
