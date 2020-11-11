
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeImg,boyImg;

function preload()
{
	treeImg = loadImage("tree.png");
	boyImg = loadImage("boy.png")
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;
  stone = new rock(300,300,20);
  mango1 = new mango(1100,300,20);
  mango2 = new mango(1200,300,20);
  mango3 = new mango(1150,350,20);
  mango4 = new mango(1220,350,20);
	Rope1 = new Rope(stone.body,{x:130, y:510});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  image(treeImg, 1000, 200, 300, 400);
  image(boyImg, 100,460, 190,190);
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  Rope1.display();
}

function mouseReleased()
{
 Rope1.fly();
}

 
function mouseDragged(){
Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}

function detectcollision(lstone,lmango)
{
  mango1=lmango.body.position
  stone=lstone.body.position
  var distance=dist(stone.x ,stone.y, mango1.x,mango1.y)
  if(distance<=lmango.r+lstone.r)
  {
    Matter.Body.setStatic(lmango.body,false);
  }
}