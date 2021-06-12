
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree;
function preload()
{
	boy=loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 695, 800, 10);
	tree = new Tree(600,500);



	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(220);
   image(boy ,200,340,200,300);
  ground.display();
  tree.display();
  drawSprites();
}



