var car;
var wall;

var speed;
var weight;
function setup() {
  createCanvas(1600,400);

  speed=random(5,60);
  weight=random(300,1600);

  car=createSprite(50,200, 50, 50);
    car.velocityX=speed;
  wall=createSprite(1500,200,60,height/2);
    wall.shapeColor=color(80);
}

function draw() {
  background(255);
  
  if(wall.x-car.x < (car.width+wall.width)/2) 
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/2250;

    if(deformation<100){
      car.shapeColor="green";
    }

    if(deformation>100 && deformation<180){
      car.shapeColor="yellow";
    }

    if(deformation>180){
      car.shapeColor="red";
    }

  }

  drawSprites();
}