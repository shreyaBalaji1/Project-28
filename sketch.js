
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, ground, stone, boy, boyImg;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var slingshot;

function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png");
	tree = loadImage("Plucking mangoes/tree.png");
	mango1 = loadImage("Plucking mangoes/mango.png");
	mango2 = loadImage("Plucking mangoes/mango.png");
	mango3 = loadImage("Plucking mangoes/mango.png");
	mango4 = loadImage("Plucking mangoes/mango.png");
	mango5 = loadImage("Plucking mangoes/mango.png");
	mango6 = loadImage("Plucking mangoes/mango.png");
	mango7 = loadImage("Plucking mangoes/mango.png");
}

function setup() {
	createCanvas(1200, 600);

	boy = createSprite(230, 490, 50, 20);
	boy.scale = .135;
	boy.addImage(boyImg);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//tree = new Tree(950, 300, 500, 600);

	ground = new Ground(600, 590, 1200, 30);
	stone = new Stone(155, 460, 50);
	mango1 = new Mango(800, 200, 60, 60);
	mango2 = new Mango(850, 260, 60, 60);
	mango3 = new Mango(890, 110, 60, 60);
	mango4 = new Mango(950, 200, 60, 60);
	mango5 = new Mango(1020, 110, 60, 60);
	mango6 = new Mango(1050, 200, 60, 60);
	mango7 = new Mango(1150, 255, 60, 60);
	slingshot = new Line(stone.body, {x:155, y:440});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  //tree.display();
  
  imageMode(CENTER);
  image(tree, 950, 300, 500, 600);

  //imageMode(CENTER);
  //image(mango1, 800, 200, 60, 60);
  
  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  slingshot.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);

  drawSprites();
 
}


function detectCollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.radius + lstone.radius) {
		Body.setStatic(lmango.body, false);
	}
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x: 235, y: 420});
		slingshot.attach(stone.body);
	}
}

function mouseDragged() {
    //stone follows the mouse
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased() {
    //Stone flies = Body A is detached from the constraint
    slingshot.fly();  
}

