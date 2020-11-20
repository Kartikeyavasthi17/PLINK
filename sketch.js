const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinko =[];
var divisions =[];
var particles =[];

var divisionHeight =300;

function preload() {
  
}

function setup() {
  var canvas = createCanvas(800,500);
  
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(0,0,0);  

  for(var k=0; k <= width; k=k+80)
  {
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  if(frameCount % 60 === 0)
  {
    particles.push(new Particle(random(50,450),40,10));
  }

  for(var j=40; j <= width; j =j+50)
  {
    plinko.push(new Plinko(j,75));
 }

 for(var j =15; j <=width-10; j=j+50)
 {
   plinko.push(new Plinko(j,175));
 }

 for(var k = 0; k < divisions.length; k++)
  {
      divisions[k].display();
  }

  for(var j = 0; j <particles.length; j++)
  {
    particles[j].display();

  }

  drawSprites();
}