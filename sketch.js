var bullet,wall,speed,weight,damage,thickness;


function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,50,5);
  bullet.shapeColor=("white");
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
damage=0.5 * weight * speed * speed / thickness * thickness * thickness;
console.log(damage);
}

function draw() {
  background("black"); 
  if(wall.x-bullet.x<wall.width/2+bullet.width/2 ) {
    bullet.velocityX=0;
    if(damage > 10){
      bullet.shapeColor=("red");
    }
    else if(damage < 10){
      bullet.shapeColor=("green");
    }
  }
  
  drawSprites();
}