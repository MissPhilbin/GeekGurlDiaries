// Self Portrait with moving eyes

let xLeft = 270;
let xRight = 328;
let y = 250;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("#B0E0E6");


  //hair background
  fill("#e3c700");
  quad(217, 290, 382, 290, 450, 400, 150, 400)
  
  //head
  noStroke();
  fill("#E4B1AB")
  circle(300, 250, 180);
  
  //hair 
  noFill();
  stroke("#ead400")
  strokeWeight(0);
  
  //left hair
  fill("#ead400");
  bezier(300, 160, 100, 180, 280, 300, 150, 400);
  //right hair
  
  fill("#ead400");
  bezier(300, 160, 500, 180, 320, 300, 450, 400);
  noStroke();
  
  //neck
  fill("#E4B1AB");
  quad(280, 310, 320, 310, 330, 370, 270, 370);
  


  
  //fringe
  noStroke()

  
  //lips
  //top
  push();
  translate(0,-100);
  fill("#e38fab");
  noStroke();
  arc(290,400,20,10,PI,0);
  arc(310,400,20,10,PI,0);
  
  //bottom
  fill("#DB7093");
  noStroke();
  arc(300,400,40,20,0,PI);
  pop();
  
  //Hoodie
  rectMode(CENTER)
  fill(255, 153, 202)
  rect(300, 435, 205, 150, 30);
  fill(255, 204, 229)

  // Eye balls
  noStroke();
  fill(255);
  ellipse(270, 250, 40);
  ellipse(328, 250, 40);

  // Pupils
  fill(0);
  ellipse(xLeft, y, 15);
  ellipse(xRight, y, 15);

  y = map(mouseY, 0, height, 240, 260, true);
  xLeft = map(mouseX, 0, width, 260, 280, true);
  xRight = map(mouseX, 0, width, 318, 340, true);

  

  
}
