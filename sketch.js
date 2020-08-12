var bananaimage,obstacleimage,obstaclegroup,score,monkey,monkeyanimation,gameover,groundd,bananagroup;

function preload() {
  monkeyanimation=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  obstacleimage=loadImage("stone.png");
  bananaimage=loadImage("banana.png");
  
  
}

function setup() {
  createCanvas(700, 300);
monkey=createSprite(50,250,20,20);
 monkey.addAnimation("a",monkeyanimation);
  monkey.scale=0.1;
  groundd=createSprite(350,293,1400,10);
  groundd.velocityX=-20;
   obstaclegroup=createGroup();
  bananagroup=createGroup();
  score=0;
}
 
function draw() {
  background(220);
  drawSprites();
  if (groundd.x < 0){
    groundd.x = groundd.width/2;
   }
    if(keyDown("space")) {
    monkey.velocityY = -14;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(groundd);
  
  
 // console.log(monkey.y);
  spawnObstacles();
  spawnbananas();
  if(bananagroup.isTouching(monkey)){
    bananagroup.destroyEach();
    score=score+10;
    switch(score){
        
      case 10: monkey.scale=0.12; break; 
      case 20: monkey.scale=0.14; break;
      case 30: monkey.scale=0.16; break; 
      case 40: monkey.scale=0.17; break;  
      case 50: monkey.scale=0.18; break; 
      case 60: monkey.scale=0.2; break;  
    case 70: monkey.scale=0.5; break;
        
    }
  }
  textSize(20);
  text("score"+score, 500,50);
  
}




function spawnObstacles() {
  if(frameCount % 145 === 0) {
    var obstacle = createSprite(750,280,10,40);
    obstacle.velocityX = -10;
    
   
      obstacle.addImage("a",obstacleimage);
         
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 750/10+30;
    //add each obstacle to the group
    obstaclegroup.add(obstacle);
  }
}
function spawnbananas() {
  //write code here to spawn the clouds
  if (frameCount % 83 === 0) {
    var banana = createSprite(750,120,40,10);
    banana.y = Math.round(random(120,220));
    banana.addImage(bananaimage);
    banana.scale = 0.05;
    banana.velocityX = -4;
    
     //assign lifetime to the variable
    banana.lifetime = 750/4;
    
    
    //add each cloud to the group
    bananagroup.add(banana);
  }
  
}