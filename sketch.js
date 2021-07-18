
var trex ,trex_running;
var ground;


  
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
groundImg=lodeimage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  groundImg=lodeImage("ground2.png");





  //create a trex sprite
  trex= createSprite(70,150,20,20);
  trex.addAnimation("running",trex_running);
 ground=createSprite(300,200,300,30);



}

function draw(){
  background("lightgrey")
  if(keyDown("space"))
  { trex.velocityY = -14; }
   trex.velocityY = trex.velocityY + 1;
    trex.collide(ground);
    
  
ground.velocityX




drawSprites();
}