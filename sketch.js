
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperobj = new Paper(50,650,5);
	groundobj = new Ground(400,680,800,20);
	db1 = new Dustbin(600,650,200,20);
	db2 = new Dustbin(500,650,20,100);
	db3 = new Dustbin(700,650,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperobj.display();
  groundobj.display();
  db1.display();
  db2.display();
  db3.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:85,y:-85});
	}
}

