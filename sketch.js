var ball;
function setup() {
  createCanvas(800, 700);
  ball=createSprite(200,300,displayWidth-160,50);
}


function draw() {
  background(0);
  ball.display();
  drawSprites();
}


