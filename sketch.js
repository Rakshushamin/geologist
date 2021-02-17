
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var rect1,rect2;
var grnd;
var cir;
var hammer;
var cir1,cir2,cir3,cir4,cir5,cir6;

function setup() {
	createCanvas(800, 700);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    

	Engine.run(engine);
	rect1=new Rectangle(550,450,110,70);
	rect2=new Square(300,200,80,50);

	grnd=new Ground(400,height,800,20);

    cir=new Circle(350,170,25);

	hammer=new Striker(150,150);
  
  cir1=new Sand(150,380,5);
  cir2=new Sand(156,380,5);
  cir3=new Sand(162,380,5);
  cir4=new Sand(168,380,5);
  cir5=new Sand(174,380,5);
  cir6=new Sand(182,380,5);
}


function draw() {
	background("Blue");
	Engine.update(engine);
  
  rectMode(CENTER);
  
  grnd.display();
  rect1.display();
  rect2.display();
  hammer.display();
  ellipseMode(RADIUS);
  //ellipse(cir.position.x,cir.position.y,25);
  //ellipse(cir.position.x,cir.position.y,10);
  //drawSprites();
  cir.display();
  cir1.display();
  cir2.display();
  cir3.display();
  cir4.display();
  cir5.display();
  cir6.display();
}



