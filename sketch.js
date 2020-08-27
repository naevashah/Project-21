var wall, thickness; 
var bullet, speed, weight;

function setup() {
  createCanvas(1600, 400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = "black";
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor = (80, 80, 80);
}

function draw() {
  background(255,255,255); 
  
if (bullet.collide (wall)){
  bullet.velocityX = 0;
  var damage = (0.5 * speed * speed * weight)/(thickness * thickness * thickness) ;
  console.log (damage);

  if (damage < 10){
    wall.shapeColor = "green";
  }

  if (damage > 10){
    wall.shapeColor = "red";
  }
}

  drawSprites();
}