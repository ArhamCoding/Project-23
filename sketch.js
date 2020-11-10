var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottomwall=createSprite(390,650,120,20);
	bottomwall.shapeColor = color(255);
	bottomwall = Bodies.rectangle(390, 310, 100, 20 , {isStatic:true} );

	leftwall=createSprite(320,610,20,120);
	leftwall.shapeColor = color(255);
	leftwall = Bodies.rectangle(390, 300, 100, 20 , {isStatic:true} );

	rightwall=createSprite(460,610,20,120);
	rightwall.shapeColor = color(255);
	rightwall = Bodies.rectangle(390, 300, 100, 20 , {isStatic:true} );

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 ,
	 {restitution:0.6, isStatic:true});
	World.add(world, packageBody);

	packageSprite.x=packageBody.position.x
	packageSprite.y=packageBody.position.y


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  bottomwall.display; 




  drawSprites();
 
}

function keyPressed() { if (keyCode === DOWN_ARROW) 
	{ Matter.Body.setStatic(packageBody,false); } 
}


