const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground1,box1,box2,box3,box4,box5;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world; 
  ground1=new Ground(500,300,200,10)
// bottom layer 
  box1=new Box(420,275,40,40)
  box2=new Box(460,275,40,40)
  box3=new Box(500,275,40,40)
  box4=new Box(540,275,40,40)
  box5=new Box(580,275,40,40)
//third layer
box6=new Box(440,234,40,40)
box7=new Box(480,234,40,40)
box8=new Box(520,234,40,40)
box9=new Box(560,234,40,40)
//second layer
box10=new Box(460,194,40,40)
box11=new Box(500,194,40,40)
box12=new Box(540,194,40,40)
//first layer 
 box13=new Box(480,154,40,40)
 box14=new Box(520,154,40,40)
//top layer
box15=new Box(500,114,40,40)
polygon=Bodies.circle(50,200,20)
World.add(world,polygon)
}
function draw() {
  background(00);  
  ground1.display();
 box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
 box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
  drawSprites();
}