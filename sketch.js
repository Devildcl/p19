var treeImg, tree;
var cheeseImg, cheese, cheeseGroup;
var monkey, monkeyImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  treeImg = loadImage("tree.jpeg/images");
  cheeseImg = loadImage("cheese.png/images");
  monkeyImg = loadImage("monkey.jpeg/images");
  cheeseGroup = new Group()
  invisibleBlockGroup = new Group()
}

function setup() {
  createCanvas(600, 600);
  tree = createSprite(300,300);
  tree.addImage("tower",treeImg);
  tree.velocityY = 1;
  monkey = createSprite(200,200,50,50)
  monkey.addImage(monkeyImg)
  monkey.scale = 0.3
}

function draw() {
  background(200);
  if(gameState === "play"){

  
  
  if(tree.y > 400){
      tree.y = 300
    }
    if(keyDown("left_arrow")){
      monkey.x = monkey.x -3
    }
    if(keyDown("right_arrow")){
      monkey.x = monkey.x +3
    }
    if(keyDown("space")){
      monkey.velocityY = -5
    
    }
    monkey.velocityY = monkey.velocityY + 0.8
    if (cheeseGroup.isTouching(monkey)){
      monkey.velocityY = 0
    }
    if (invisibleBlockGroup.isTouching(ghost)|| ghost.y>600){
      monkey.destroy()
      gameState = "end"
    }
    drawSprites()
  }
  else if (gameState === "end"){
    stroke("yellow")
    fill("red")
    textSize(30)
    text("GAME OVER",230,250)
  }
}

function spawnDoors(){
  if (frameCount%200 === 0){
   cheese = createSprite(200,10)
   invisibleBlock = createSprite(200,15)
    cheese.addImage(climberImg)
    cheese.x = Math.round(random(120,400))
    invisibleBlock.width = cheese.width
    invisibleBlock.height = 2
    invisibleBlock.x = door.x
    cheese.velocityY = 1
    invisibleBlock.velocityY = 1
    monkey.depth = cheese.depth
    monkey.depth = ghost.depth +1
    cheese.lifetime = 800
    cheeseGroup.add(climber)
    invisibleBlockGroup.add(invisibleBlock)
  }
} 