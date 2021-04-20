const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var polygon, slingShot, score;


function preload() {
  polygon_img = loadImage("polygon.png");
}

function setup() {
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world

  var score = 0;
  ground = new Ground(400,400,800,20);
  stand = new Ground(400,200,210,20);

  //level one
  block1 = new Box(200,275,30,40);
  block2 = new Box(220,275,30,40);
  block3 = new Box(240,275,30,40);
  block4 = new Box(260,275,30,40);
  block5 = new Box(280,275,30,40);
  block6 = new Box(300,275,30,40);
  block7 = new Box(300,275,30,40);

  //level two
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);

  //level three
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);

  //top
  block16 = new Box(390,155,30,40);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new Slingshot(polygon,{ x: 100, y: 200});

  Engine.run(engine);
}

function draw() {
  background("bg");

  text("Score:" + score,750, 40);
  
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

  //block1.score();
  //block2.score();
  //block3.score();
  //block4.score();
  //block4.score();
  //block5.score();
  //block6.score();
  //block7.score();
  //block8.score();
  //block9.score();
  
  ground.display();
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingShot.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if(keyCode === 32) {
    slingShot.attach(this.polygon);
  }
}

async function getBackgroundImg() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson = await response.json();
  console.log(responseJson);
  var dt = responseJson.datetime;
  console.log(dt);
  var hour = dt.slice(11, 13);
  console.log(hour);

  if(hour >= 6 && hour < 19) {
      bg = "black.png";
  } else {
      bg = "white.png";
  }
  backgroundImg = loadImage(bg);
  console.log(bg);
}