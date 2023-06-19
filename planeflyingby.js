void setup() {
  size(400, 400);
}
var planeX = 10;
var planeY = 150;

draw = function() {
    
    noStroke();
    
    //The Sky
    background(0, 40, 150);
    
    //The Stars
    fill(255, 255, 255);
    ellipse(150,90,4,4);
    ellipse(190,190,4,4);
    ellipse(50,300,6,6);
    ellipse(300,50,4,4);
    ellipse(100,30,6,6);
    
    //The Ground
    fill(89, 89, 89);
    rect(0,380,400,20);
    
    //The Plane's Body
    fill(255, 255, 255);
    ellipse(planeX,planeY,250,100);
    fill(0, 0, 0);
    arc(planeX+80,planeY+10,90,-90,0,90);
    
    //The Plane's Windows
    ellipse(planeX+45,planeY,30,45);
    ellipse(planeX+5,planeY,30,45);
    ellipse(planeX-35,planeY,30,50);
    
    //The Plane's Left Wing
    fill(255, 255, 255);
    triangle(planeX-10,planeY-46.3,planeX+20,planeY-150,planeX+50,planeY-46);
    
    //The Plane's Right Wing
    triangle(planeX-10,planeY+46,planeX+20,planeY+150,planeX+50,planeY+46);
    
    //The Plane's Tail
    triangle(planeX-120,planeY-10,planeX-95-30-10,planeY-125,planeX-60,planeY-0);
    triangle(planeX-140,planeY+115,planeX-95-3-15,planeY+10,planeX-75,planeY+40);
    
    //The Building
    fill(43, 43, 43);
    rect(270,80,120,300);
    
    //The Building's Windows
    fill(255, 255, 255);
    rect(290,100,25,25);
    rect(350,100,25,25);
    rect(290,150,25,25);
    rect(350,150,25,25);
    rect(290,200,25,25);
    rect(350,200,25,25);
    rect(290,250,25,25);
    rect(350,250,25,25);
    
    //The Building's Door
    fill(181, 181, 181);
    rect(300,290,60,90);
    fill(0, 0, 0);
    ellipse(320,310,10,10);
    
    planeX+=5;
    planeY-=3;    

};
