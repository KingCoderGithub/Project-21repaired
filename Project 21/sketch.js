var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	var ball_options = {
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
	}
  ball = Bodies.circle(260, 100, 20, ball_options)
  World.add(world, ball)
  wall1 = new Ground(800, 670, 700, 20);
  wall2 = new Ground(110, 600, 20, 120);
  wall3 = new Ground(1350, 600, 20, 120);

  rectMode(CENTER);
  ellipseMode(RADIUS);


	Engine.run(engine);
  
}


function draw() {
  background(51);

 wall1.display();
 wall2.display();
 wall3.display();
Engine.update(engine);

ellipse(ball.position.x, ball.position.y, 40, 40)

  drawSprites();
 
}
function keyPressed() {
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(ball, ball.position, {x:85, y:-85})
}




