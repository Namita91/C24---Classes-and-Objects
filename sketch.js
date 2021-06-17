//Namespacing of the physics engine modules
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var ground;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup() {
  createCanvas(1200,800);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  //creating all the objects required to make the box model of Angry Birds game

  ground = new Ground(600, 795, 1200, 10);

  box1 = new Box(695,765);
  box2 = new Box(815,765);
  pig1 = new Pig(755,770);
  //angle here refers in the unit of radians, not degrees and PI = 180 degrees
  log1 = new Log(755, 735, 180, PI/2);

  box3 = new Box(695,700);
  box4 = new Box(815,700);
  pig2 = new Pig(755,705);
  log2 = new Log(755, 665, 180, PI/2);

  box5 = new Box(755,630);
  //these sloping logs would slip to ground. To stop this sliding from happening, we might have to adjust the friction for box and logs
  log3 = new Log(730, 605, 100, PI/4);
  log4 = new Log(780, 605, 100, -PI/4);

  bird = new Bird(100,100);

}

function draw() {
  background(0);
  
  Engine.update(myEngine);

  //displaying all objects needed for the box model of Angry Birds game

  ground.display();

  box1.display();
  box2.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();

  bird.display();

}