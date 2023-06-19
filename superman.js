void setup() {
  size(400, 400);
}

noStroke();
var x=500;
var y=230;

var logo = function(logox, logoy) {
    pushMatrix();
    rotate(90);
    fill(255,0,0);
    textSize(20);
    text("S",logox,logoy);
    popMatrix();
};

draw = function() {
    
    //sky
    background(0, 255, 247);
    
    //hair
    fill(0, 0, 0);
    ellipse(x-122,y,85,75);
    
    //head
    fill(232, 173, 126);
    ellipse(x-117,y,75,75); 
    
    //left eye
    fill(0, 0, 0);
    ellipse(x-125,y-10,15,10);
    
    //right eye
    fill(0, 0, 0);
    ellipse(x-125,y-10,15,10);
    
    //left eye
    fill(0, 0, 0);
    ellipse(x-125,y+10,15,10);
    
    //mouth
    fill(0, 0, 0);
    rect(x-111,y-18,1,37);
    
    //cape
    fill(255, 0, 0);
    rect(x-80,y-50,170,100);
    
    //body
    fill(0, 98, 255);
    rect(x-80,y-40,130,80);
    fill(255, 0, 0);
    triangle(x-55,y-18,x-55,y+18,x-10,y);
    fill(255, 187, 0);
    triangle(x-50,y-13,x-50,y+13,x-17,y);
    strokeWeight(10);
    
    var logox = x-45;
    var logoy = y-6;
    logo(logox,logoy);
    
    //left leg
    fill(0, 98, 255);
    rect(x+50,y-40,70,32);
    fill(255, 0, 0);
    ellipse(x+127,y-30,15,43);
    
    //right leg
    fill(0,98, 255);
    rect(x+50,y+8,70,32);
    fill(255, 0, 0);
    ellipse(x+127,y+30,15,43);
    
    //right arm
    fill(0, 98, 255);
    rect(x-80,y-50,15,10);
    fill(0, 98, 255);
    rect(x-166,y-64,100,15);
    fill(232, 173, 126);
    ellipse(x-166,y-59,20,25);
    
    //left arm
    fill(0, 98, 255);
    rect(x-80,y+40,15,10);
    fill(0, 98, 255);
    rect(x-166,y+45,100,15);
    fill(232, 173, 126);
    ellipse(x-166,y+52,20,25);
    
    x-=5;
    if (x < -100) {
        x=580;
    }
};

