function setup() {
    createCanvas (400,269);
    background (255,229,180);

    for(x=5; x < width; x += 5){
      for(y=5; y< innerHeight; y +=5){
        fill (205,92,92)
        noStroke();
        ellipse(x,y,2,2)
      }
    }


  fill(255);
  rect(0, 90, 80, 15);
  fill(0);
  rect(0, 155, 150, 3);
  fill(0);
  rect(0, 165, 80, 3);
  fill(255);
  rect(0, 180, 40, 5);
  fill(0);
  rect(0, 230, 180, 10);
  fill(0);
  rect(0, 10, 20, 5);

  
}


function draw() {
  
  fill (220,20,60);
  noStroke(0);
  ellipse(302, 182, 15, 15);
  
  fill (220,20,60);
  noStroke(0);
  ellipse(315, 178, 30, 30);
  
  fill (220,20,60);
  noStroke(0);
  ellipse(350, 170, 50, 50);

  fill (220,20,60);
  noStroke(0);
  ellipse(367, 180, 50, 50);

  fill (220,20,60);
  noStroke(0);
  ellipse(350, 180, 50, 50);

  fill (220,20,60);
  noStroke(0);
  ellipse(332, 177, 50, 50);

  fill (220,20,60);
  noStroke(0);
  ellipse(360, 140, 35, 35);

  fill (220,20,60);
  noStroke(0);
  ellipse(342, 150, 35, 35);

  fill (220,20,60);
  noStroke(0);
  ellipse(330, 161, 35, 35);
  
  

  
  
  noFill();
  stroke(0);
  strokeWeight (3);

  curve (153,16,170,20,187,40,219,84);
  curve (153,16,171,20,200,40,219,84);
  curve (153,16,180,20,205,38,219,84);
  curve (160,19,190,18,210,34,210,38);
  curve (160,19,198,16,215,30,210,38);
  curve (160,19,205,13,220,28,210,38);

  noFill();
  stroke(0);
  strokeWeight (9);
  curve (220,0,350,-15,370,50,112,243);
  curve (600,-70,370,50,380,130,400,85);
  curve (360,100,380,130,365,155,350,120);
  curve (130,140,365,155,375,200,290,150);
  curve (600,90,375,200,400,290,380,250);

  noFill ();
  stroke(0);
  strokeWeight (4);
  curve (400,280,380,130,290,185,100,500);
  curve (300,150,365,155,290,185,100,300);

  noFill();
  stroke(0);
  strokeWeight (5);
  curve (150,90,290,185,375,200,400,90)
  
  fill (220,20,600);
  ellipse (300,200,2,2);

  noFill();
  stroke(0);
  strokeWeight (5);
  curve (250,159,320,60,350,40,400,151);
  curve (280,30,295,50,330,60,400,20);







  




}