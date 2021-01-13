var R1, R2, R3;
function setup() {
  createCanvas(800,400);
  R1 = createSprite(100, 200, 50, 50);
  R2 = createSprite(100, 400, 50, 50);
  R3 = createSprite(700, 200, 50, 70);
  R1.velocityX = 3;
  R3.velocityX = -3;
}

function draw() {
  background(255,255,255); 
  R2.x = World.mouseX;
  R2.y = World.mouseY;
  console.log(R2.x);
  if (touch(R3, R1)){
R3.velocityY = 2;
R1.velocityY = -2;
  }

  drawSprites();
}
