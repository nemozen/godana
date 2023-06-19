void setup() {
  size(400, 400);
}
noStroke();

var x=200;
var y=100;
var w=100;
var h=100;

//Sky
background(70, 143, 227);

//Ground
fill(61, 61, 61);
rect(x-200,y+220,400,80);

//The Persons Head
fill(230, 139, 64);
ellipse(x+130,y-10,80,80);

//The Persons Right Eye
fill(0, 0, 0);
ellipse(x+110,y-20,10,15);

//The Persons Left Eye
fill(0, 0, 0);
ellipse(x+130,y-20,10,15);

//The Persons Mouth
ellipse(x+120,y,30,15);

//The Persons Body
fill(105, 41, 255);
rect(x+90,y+30,80,100);

//The Persons Left Arm
fill(230, 139, 64);
rect(x,y+40,90,20,10);

//The Persons Left Arm
fill(230, 139, 64);
rect(x+170,y+32,20,90,10);

//The Persons Right Leg
fill(0, 122, 16);
rect(x+90,y+128,30,80);
fill(0, 0, 0);
ellipse(x+100,y+210,43,15);

//The Persons Left Leg
fill(0, 122, 16);
rect(x+140,y+128,30,80);
fill(0, 0, 0);
ellipse(x+160,y+210,43,15);

//The Person Saying "The Sun Is Exploding!!!" 
fill(255, 255, 255);
ellipse(x+15,y+80,150,40);
fill(0, 0, 0);
textSize(13);
text("The Sun Is Exploding!!!",x-50,y+80);

draw = function() {

    //Sun
    fill(255, 179, 0);
    ellipse(x-150,y-70,w,h);
    
    x+=1;
    y+=1;
    w+=5;
    h+=5;
};

