void setup() {
  size(400, 400);
}
var fireHeight = 200;

noStroke();

draw = function() {

background(125, 0, 0);

//The Volcano's Fire
fill(184, 0, 0);
rect(175,180,50,fireHeight);

//The Volcano
fill(79, 49, 0);
quad(30,400,370,400,240,130,160,130);

fireHeight -= 5;
 
if(fireHeight < -95){

fill(99, 99, 99);
textSize(50);
text("RIP Everybody",40,95);

} 
    
};

