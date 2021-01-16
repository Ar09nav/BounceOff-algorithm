var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 450,80,30);
  movingRect.shapeColor = "red";
  movingRect.debug = true;

  movingRect.velocityY = -7;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0); 
  
  edges=createEdgeSprites();

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  
  movingRect.bounceOff(edges[1]);
  movingRect.bounceOff(edges[0]);
  movingRect.bounceOff(edges[2]);
  movingRect.bounceOff(edges[3]);
  
  fixedRect.bounceOff(edges[1]);
  fixedRect.bounceOff(edges[0]);
  fixedRect.bounceOff(edges[2]);
  fixedRect.bounceOff(edges[3]);
  
  drawSprites();
}