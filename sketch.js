
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var paper0;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    
	box1=createSprite(400,670,200,20);
	box1.shapeColor=color("red");

	box2=createSprite(290,630,20,100);
	box2.shapeColor=color("red");

	box3=createSprite(510,630,20,100);
	box3.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

    box1b=Bodies.rectangle(400,670,200,20, {isStatic:true});
	World.add(world,box1b);
	box2b=Bodies.rectangle(290,630,20,100, {isStatic:true});
	World.add(world,box2b);
	box3b=Bodies.rectangle(610,630,20,100, {isStatic:true});
	World.add(world,box3b);
	

	ground = new Ground(400,690,800,20);
	paper0 = new Paper(400,350,20,20);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  paper0.display();
  drawSprites();
 
}



