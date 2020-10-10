
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage, ground;
var FoodGroup, obstacleGroup;
var score=0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600, 400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;

  ground = createSprite(400, 350, 9000, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);

  obstaclesGroup = createGroup();
  FoodGroup = createGroup();
  
}


function draw() {
  background(180);
  
  stroke("white");
  textSize(20);
  fill("white");
  score=Math.ceil(frameCount/frameRate());
  text("Score: " + score, 300, 50);
  
    
  spawnObstacles();
  food();
  
      if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    //jump when the space key is pressed
    if(keyDown("space")) {
        monkey.velocityY = -12;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
    monkey.collide(ground);
  
    drawSprites();
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,330,0,0);
   obstacle.addImage(obstaceImage);
   obstacle.scale=0.1;
   obstacle.velocityX = -6
    //assign scale and lifetime to the obstacle           
    obstacle.lifetime = 300;
   
 }
}

function food(){
  
  if (frameCount % 80 === 0) {
    banana = createSprite(400,340,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -10; 
    banana.scale=0.1
    banana.lifetime = 200;
    
  }
}




