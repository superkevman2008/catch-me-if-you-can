var fixedRect, movingRect;
var score 
var gameState
function setup() {
  createCanvas(windowWidth,windowHeight);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  score = 0
  gameState = "PLAY"
  setTimeout (gameOver,10000)
 if(! localStorage["high"]){
   localStorage["high"] = score
 }

}

function draw() {
  background(0,0,0);  
  


if (gameState === "PLAY"){
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if(isTouching()){
   fixedRect.x = random(0,width)
   fixedRect.y = random(0,height)
   fixedRect.shapeColor = color(random(0,255),random(0,255),random(0,255))
   fixedRect.width = random(20,70)
   fixedRect.height = random(20,70)
   score ++
 }
}

  drawSprites();
  fill (fixedRect.shapeColor)
  textSize (25)
text (score,width/2, 25)

if(gameState === "END"){
  if( score >= localStorage["high"]){
    localStorage["high"] = score
  }
  textAlign(CENTER)
  textSize (50)
  fill ("blue")
  text ("Game Over",width/2, height/2 )
  text ("High Score   " + localStorage["high"], width/2, height/2 + 60)
  text ("Press Space to Restart", width/2, height/2 + 120)
  if(keyDown("space")){
    
    score = 0
    gameState = "PLAY"
    setTimeout (gameOver,10000)
  }
  }
  
}
function isTouching(){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  
  return true
}
else {
  return false
}

}

function gameOver(){
gameState = "END"
}

