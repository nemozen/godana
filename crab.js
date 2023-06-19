void setup() {
  size(400, 400);
}
var crabX = 55;
var crabY = 295;

draw = function() {
    
    noStroke();
    
    background(0, 170, 255);
    
    //the sun
    fill(255, 179, 0);
    ellipse(100,100,100,100);
    
    //the sand
    fill(201, 137, 34);
    rect(0,330,150,70);
    
    //the ocean
    fill(0, 26, 255);
    rect(150,350,350,50);
    
    //the crab's body
    fill(252, 0, 0);
    ellipse(crabX,crabY,50,30);
    
    //the crab's right eye
    fill(252, 0, 0);
    rect(crabX-9,crabY-25,5,10);
    fill(0, 0, 0);
    ellipse(crabX-7,crabY-25,10,10);
    
    //the crab's left eye
    fill(252, 0, 0);
    rect(crabX+4,crabY-25,5,10);
    fill(0, 0, 0);
    ellipse(crabX+7,crabY-25,10,10);
    
    //the crab's mouth
    rect(crabX-5,crabY,10,2);
    
    //the crab's legs
    fill(252, 0, 0);
    rect(crabX-13,crabY+10,5,25);
    rect(crabX+7,crabY+10,5,25);
    rect(crabX+1,crabY+10,5,25);
    rect(crabX-7,crabY+10,5,25);
    rect(crabX-20,crabY+10,5,25);
    rect(crabX+14,crabY+10,5,25);
    
    //the crab's right pincer
    ellipse(crabX-30,crabY,15,8);
    ellipse(crabX-35,crabY-10,8,25);
    
    //the crab's right pincer
    ellipse(crabX+30,crabY,15,8);
    ellipse(crabX+35,crabY-10,8,25);
    
    //crabX+=2;
    //crabY+=2;
    if (crabX > 190) {
        if (crabY < 370) {
            crabY+=5;
        }else {
            crabX+=2;
        }
    } else {
        crabX+=2;
        
    }
    
    
    
};
