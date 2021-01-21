
var monkey, monkeyRunning;
var ground;
var bananaGroup,banana;
var obstacleGroup,obstacle;

function preload(){
  
  monkeyRunning = loadAnimation("monkey_0.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png");
  banana = loadImage("banana.png");
  obstacle = loadImage("obstacle.png");
  
 
}



function setup() {
   createCanvas(400,400);
  monkey = createSprite(50,200,10,10)
  monkey.addAnimation("monkeyRun",monkeyRunning);
  monkey.scale = 0.1;
 
  ground = createSprite(500,350,1200,10);
  //ground.velocityX = -1;
} 


function draw() {
  background(180);
  console.log(monkey.y);
  if(keyDown("space")&&monkey.y >314){
    monkey.velocityY = -5
  }
  monkey.velocityY = monkey.velocityY + 0.1;
if(ground.x === ground.width/2){
  ground.x = 500
}
  monkey.collide(ground);
  bananaSpawner();
  obstacleSpawner();
  drawSprites();
  var score = Math.round(frameCount/20);
  text("survival time:"+score,200,50);
}
function bananaSpawner(){
  if(frameCount%80 === 0){
var rand = random(120,200);
var banana1 = createSprite(500,rand,10,10);
    banana1.addImage(banana);
    banana1.scale = 0.1;
    banana1.velocityX = -7;
    banana1.lifeTime = 300;
    
  }
}
function obstacleSpawner(){
  if(frameCount%300 === 0){
    
    var obstacle1 = createSprite(500,325,10,10);
    obstacle1.addImage(obstacle);
    obstacle1.scale = 0.1;
    obstacle1.velocityX = -7;
    obstacle1.lifeTime = 300;
    
  }
}



