void setup() {
  size(400, 400);
}

var sheep1X = 100;
var sheep1Y = 50;
var sheep2X = 200;
var sheep2Y = 50;
var personX = 320;
var personY = 285;
var t = 0;

var sheep = function(sheepX,sheepY) {

    //the sheep's head
    fill(214, 173, 120);
    ellipse(sheepX,sheepY,50,30);
    fill(255, 255, 255);
    ellipse(sheepX-15,sheepY-17,15,10);
    ellipse(sheepX,sheepY-17,15,10);
    ellipse(sheepX+15,sheepY-17,15,10);
    ellipse(sheepX-20,sheepY-5,11,15);
    
    //the sheep's right eye
    fill(0, 0, 0);
    ellipse(sheepX,sheepY-8,5,5);
    
    //the sheep's left eye
    fill(0, 0, 0);
    ellipse(sheepX+10,sheepY-8,5,5);
    
    //the sheep's nose
    stroke(0, 0, 0);
    strokeWeight(3);
    point(sheepX+18,sheepY);
    point(sheepX+10,sheepY);
    
    //the sheep's mouth
    strokeWeight(1);
    line(sheepX,sheepY+7,sheepX+15,sheepY+7);
    
    //the sheep's neck
    strokeWeight(1);
    fill(214, 173, 120);
    rect(sheepX-10,sheepY+15,10,15);
    
    //the sheep's body
    fill(255, 255, 255);
    ellipse(sheepX-10,sheepY+35,30,20);
    ellipse(sheepX-35,sheepY+35,30,20);
    ellipse(sheepX-55,sheepY+35,30,20);
    ellipse(sheepX-60,sheepY+55,20,30);
    ellipse(sheepX-55,sheepY+80,30,20);
    ellipse(sheepX-35,sheepY+80,30,20);
    ellipse(sheepX-15,sheepY+80,30,20);
    ellipse(sheepX-5,sheepY+55,20,30);
    ellipse(sheepX-20,sheepY+55,20,30);
    ellipse(sheepX-35,sheepY+55,20,30);
    ellipse(sheepX-50,sheepY+55,20,30);
    
    //the sheep's front legs
    fill(214, 173, 120);
    rect(sheepX-10,sheepY+85,10,40,20);
    rect(sheepX-25,sheepY+85,10,40,20);
    
    //the sheep's back legs
    rect(sheepX-65,sheepY+85,10,40,20);
    rect(sheepX-50,sheepY+85,10,40,20);
    
    //the sheep's tail
    fill(255, 255, 255);
    ellipse(sheepX-80,sheepY+60,30,20);
    
};

draw = function() {
    
    background(0, 0, 0);
    
    //the person's head
    fill(120, 64, 0);
    ellipse(personX,personY,80,80);
    
    //the person's right eye
    fill(0, 0, 0);
    rect(personX+15,personY-25,1,15);
    
    //the person's left eye
    rect(personX+15,personY+15,1,15);
    
    //the person's nose
    rect(personX,personY-3,1,10);
    
    //the person's mouth
    rect(personX-20,personY-13,1,30);
    
    //the person's body
    fill(94, 94, 94);
    rect(personX-170,personY-42,130,90,20);
    
    //the person's right arm
    fill(120, 64, 0);
    rect(personX-170,personY-50,120,20,20);
    
    //the person's left arm
    fill(120, 64, 0);
    rect(personX-170,personY+30,120,20,20);
    
    //the person's right leg
    fill(94, 94, 94);
    rect(personX-290,personY-30,120,30,10);
    fill(120, 64, 0);
    ellipse(personX-290,personY-20,20,40);
    
    //the person's left leg
    fill(94, 94, 94);
    rect(personX-290,personY+10,120,30,10);
    fill(120, 64, 0);
    ellipse(personX-290,personY+30,20,40);
    
    //the person dreaming
    fill(255, 255, 255);
    ellipse(200,100,450,230);
    ellipse(330,200,20,20);
    ellipse(330,230,20,20);
    
    //the bed
    fill(125, 125, 125);
    rect(5,330,370,50);
    fill(255, 255, 255);
    rect(20,380,20,20);
    rect(100,380,20,20);
    rect(340,380,20,20);
    rect(340-80,380,20,20);
    
    //the fence
    fill(130, 130, 130);
    quad(250,180,250,120,295,40,295,100);
    
    t += 1;
    
    if (t < 180) { 
        sheep2X += 1;
    }
    if (t > 60 && t < 100){
        sheep2Y -= 2;
    } 
    if (t > 100 && t < 140){ 
        sheep2Y += 2; 
    }
    if (t > 180 && t < 420) { 
        sheep1X += 1;
    }
    if (t > 340 && t < 380){
        sheep1Y -= 2;
    } 
    if (t > 380 && t < 420){ 
        sheep1Y += 2; 
    }
    sheep(sheep1X, sheep1Y);
    sheep(sheep2X, sheep2Y);
    
};
