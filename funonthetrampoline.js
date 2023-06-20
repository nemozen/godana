void setup() {
  size(400, 400);
}

var y = 130;
var direction = -4;

draw = function() {
    
    background(179, 0, 255);
    
    //trampoline
    fill(168, 22, 22);
    ellipse(200,210+70,320,70);
    fill(0, 0, 0);
    ellipse(200,200+70,300,50);
    rect(110,200+110,20,100);
    rect(250,200+110,20,100);
    rect(70,200+105,20,80);
    rect(300,200+105,20,80);
    
    //the persons head
    fill(181, 108, 26);
    ellipse(200,y,70,70);
    
    //the persons right eye
    fill(0, 0, 0);
    ellipse(190,y-7,8,13);
    
    //the persons left eye
    fill(0, 0, 0);
    ellipse(210,y-7,8,13);
    
    //the persons nose
    rect(195,y+7,10,2);
    
    //the persons mouth
    rect(186,y+20,30,2);
    
    //the persons body
    fill(0, 255, 64);
    rect(170,y+35,60,70);
    
    //the persons right arm
    fill(181, 108, 26);
    rect(110,y+50,60,10,10);
    
    //the persons left arm
    fill(181, 108, 26);
    rect(230,y+50,60,10,10);
    
    //the persons right leg
    fill(27, 62, 179);
    rect(170,y+100,25,60,10);
    
    //the persons left leg
    fill(27, 62, 179);
    rect(205,y+100,25,60,10);


    if (y>130) { direction = -direction;}
    if (y <0) { direction = -direction;}
    y += direction;
   
};

