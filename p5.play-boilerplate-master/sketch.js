const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var wall, ball;

function preload(){

}

function setup(){
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  roof = new Roof(170, 100, 150, 20);

  bob1 = new Bob(120, 300);
  bob2 = new Bob(140, 300);
  bob3 = new Bob(160, 300);
  bob4 = new Bob(180, 300);
  bob5 = new Bob(200, 300);

  rope = new Rope(bob1.body, roof.body, -bobDiameter*2, 0);

  Engine.run(engine);
}


function draw(){
  background("lightGrey");
  Engine.update(engine);

  textSize(20);
  text(mouseX, 100, 30);
  text(mouseY, 200, 30);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope.display();

  drawSprites();
}