
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane;
var block1, block2, block3;

function preload()
{
	
}

function setup() {
	createCanvas(550, 800);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    var plane_options={
		isStatic: true
	}

	var block1_options={
		restitution: 0.5,
		friction: 0.02,
		frictionAir: 0
	}
	var block2_options={
		restitution: 0.7,
		friction: 0.01,
		frictionAir: 0.1
	}
	var block3_options={
		restitution: 0.1,
		friction: 1,
		frictionAir: 0.3
	}

	plane=Bodies.rectangle(600, 580, 1200, 2, plane_options);
	World.add(world, plane);
	
	block1=Bodies.circle(220, 10, 30, block1_options);
	World.add(world, block1);
	block2=Bodies.rectangle(110, 50, 50, 50, block2_options);
	World.add(world, block2);
	block3=Bodies.rectangle(350, 50, 100, 50, block3_options);
	World.add(world, block3);

	fill("brown");
	rectMode(CENTER);
	ellipseMode(RADIUS);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  Engine.update(engine);
  
  rect(plane.position.x, plane.position.y, 1200, 2);
  ellipse(block1.position.x, block1.position.y, 30);
  rect(block2.position.x, block2.position.y, 50, 50 );
  rect(block3.position.x, block3.position.y, 100, 50 );
  
  drawSprites();
}



