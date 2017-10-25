s=0;

function setup() {
  resizeCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  colorMode(RGB)
}

function draw() {
 
  var hr = hour();
  var mn = minute();
  var sc = second();
  
  background('black')
  

  
  translate(width/2,height/2);
  scale(s/1000);
  if(windowWidth > windowHeight) {s = height;}
  else {s = width;}
 
  
   
  stang(-310,0.6,[250,70,80],24);
  stang(310,0.6,[250,70,80],60);
  stang(0,0.6,[250,70,80],60);
  
  // seconds
  clockHand(second(),60,10,120,[10,100,200],310)
  // minutes
  clockHand(minute(),60,25,120,[55,214,163],0)
  // hours
  clockHand(hour(),24,50,120,[250,173,142],-310)
  

  noStroke()
  
  /*orario(hour(),12,200,310,0,'green')
   orario(minute(),60,200,310,0,'blue')
    orario(second(),60,200,310,0,'black')
    */

  
   ell(0, 70, 70)
   ell(-310, 70, 70)
   ell(310, 70, 70)
   
   testo(second(), 299, 7,[10,100,200], 50)
   testo(minute(), -10, 7,[55,214,163], 50)
   testo(hour(), -320, 7,[250,173,142], 50)

  
}

function clockHand(timeValue,range,size,radius,col,posx){
  push()
  translate(posx,0);
  var angle = map(timeValue,0,range,-90,270)
  noFill()
  stroke(col)
  strokeWeight(7)
  line(0,0,radius*cos(angle),radius*sin(angle))
  rotate(angle)
  color('yellow')
  pop()
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

  
  /*function orario(timeValue,range,size,posx,posy,col){
  push()
  var angle = map(timeValue,0,range,-160,200)
 rotate(angle)
  fill(col)
  strokeWeight(10)
  text(timeValue,posx,posy)
  pop()
  }
  */
  
  function stang(posX,size,col,num) {
  push();
  translate(posX,0);
  scale(size);
  stroke(col);
  strokeWeight(1.25);
  for(i = 0; i<=num; i++) {
  line(0,0,-200,0);
  rotate(360/num);
  }
  pop();
  }
  
  function ell(x1,y1,r1,r2){
   push()
    var customHue = (noise(x1/100)* 360 + frameCount *10) % 360;
    //console.log(customHue);
    var customS = noise(x1/10)* 100;
    fill(customHue, customS, 100);
   ellipse(x1,0,60,60)
   pop()
  }
  
   function testo(timeValue, posx, posy, col, size) {
    push()
    textSize(20);
    textStyle(BOLD);
    fill(col)
    text(timeValue, posx, posy)
    pop()
   }

 
  
