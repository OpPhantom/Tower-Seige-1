const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  canvas = createCanvas(1000,650);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(325,630,1000,15);
 ground2=new Ground(500,580,400,20);
 ground3=new Ground(625,270,300,20);

 box1=new Box(335,525,40,50);
 box2=new Box(375,525,40,50);
 box3=new Box(415,525,40,50);
 box4=new Box(455,525,40,50);
 box5=new Box(495,525,40,50);
 box6=new Box(535,525,40,50);
 box7=new Box(575,525,40,50);
 box8=new Box(615,540,40,50);
 box9=new Box(660,540,40,50);
 box10=new Box(355,450,40,50);
 box11=new Box(400,450,40,50);
 box12=new Box(425,450,40,50);
 box13=new Box(480,450,40,50);
 box14=new Box(515,450,40,50);
 box15=new Box(560,450,40,50);
 box16=new Box(595,450,40,50);
 box17=new Box(480,350,40,50);
 box18=new Box(530,350,40,50);
 box19=new Box(430,350,40,50);
 box27=new Box(480,335,40,50);

 box20=new Box(510,215,40,60);
 box21=new Box(550,215,40,60);
 box22=new Box(590,215,40,60);
 box23=new Box(640,215,40,60);
 box24=new Box(680,215,40,60);
 box25=new Box(540,160,40,60);
 box26=new Box(580,160,40,60);

 box28=new Box(620,160,40,60);
 box29=new Box(660,160,40,60);
 box30=new Box(595,100,40,60);

 body = new Body(50,500);

 chain1 = new chain(body.body,{x:100,y:655})
}

function draw() {
  background("lightBlue");
  Engine.update(engine);

  textSize(20);
  text("mam when I display chain it says chain.display is not a function", 50,50)

  ground.display();
  ground2.display();
  ground3.display();

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
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

  body.display();
}

function mouseDragged(){
  Matter.Body.setPosition(body.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  chain1.fly();
}