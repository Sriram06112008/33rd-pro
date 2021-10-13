const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var background, backgroundImg;
var snow, ball, ballImg;
var snowArray = []

function preload(){
   backgroundImg = loadImage("snow2.jpg");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  drawSprites();              
  

  if (frameCount%40===0) {
    snow = new Snow(random(10,width-10),random(10,50), 50);
    snowArray.push(snow);
  }
   
  for (var k = 0; k < snowArray.length; k++) {
        
    snowArray[k].display();
    
  }
}