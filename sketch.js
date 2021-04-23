var baground,BagImg;
var zombie,zomImg;
var hunta,huntaImg,standHunt,standHuntImg;



function preload(){
 bagImg=loadImage("Images/Background.jpg");
 zomImg=loadImage("Images/zombie.jpg");
 huntaImg=loadImage("Images/Hunter.jpg");
 standHuntImg=loadImage("Images/standHunt.jpg");
}



function setup() {
  createCanvas(2000,1000);

  baground=createSprite(1000,500,2000,1000);
  baground.addImage(bagImg);

  zombie=createSprite(500,500,50,50);
  zombie.addImage(zomImg);

  hunta=createSprite(1200,500,50,50);
  hunta.addImage(huntaImg);
  hunta.scale=0.3;
}

function draw() {
  background("black"); 

 if(keyDown("right")){
   zombie.x=zombie.x+5; 
 }

 if(keyDown("left")){
   zombie.x=zombie.x-5;
 }

  drawSprites();
}

