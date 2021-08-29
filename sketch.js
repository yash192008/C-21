
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Declaring our own world and engine
var myEngine,myWorld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  //Creating our own world and engine
  myEngine = Engine.create();
  myWorld = myEngine.world;
  
   //options for ground
   //isStatic-making it not to fall down
   var ground_options ={
     isStatic: true
   };

   var ball_options={
restitution:1
   };
  //Creating Ground Body 
  ground = Bodies.rectangle(200,380,400,20,ground_options);
  World.add(myWorld,ground);

  ball=Bodies.circle(100,10,10,ball_options);
  World.add(myWorld,ball);
}


function draw() 
{
  background(51);
  Engine.update(myEngine);
  
  //Drawing ground
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
//drawing ball
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,10,10);

}

