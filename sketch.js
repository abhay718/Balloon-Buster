//all sprites
var red_balloon, blue_balloon, green_balloon, pink_balloon, bow, arrow, background, pink_balloon;

//all images
var redballoonimage, greenballoonimage, blueballoonimage, backimage, pinkballoonimage;
var bowimage;
var arrowimage;

//score
var score;

//gamestate
var PLAY = 1;
var END = 0;
var SERVE = 2;
var gameState = SERVE;

//groups
var rb, bb, gb, pb;
var arrowg;

function preload() {
  //load your images here 

  redballoonimage = loadAnimation("red_balloon0.png");

  blueballoonimage = loadAnimation("blue_balloon0.png");

  backimage = loadImage("background0.png");

  greenballoonimage = loadAnimation("green_balloon0.png");

  bowimage = loadAnimation("bow0.png");

  arrowimage = loadAnimation("arrow0.png");

  pinkballoonimage = loadAnimation("pink_balloon0.png");
}

function setup() {
  createCanvas(700, 600);

  //Array for mobile 
  newArray = [0,1,2,3];
  
  
  //groups
  pb = new Group();
  rb = new Group();
  gb = new Group();
  bb = new Group();

  arrowg = new Group();

  //background
  b();

  //score
  score = 0;


  //bow
  bow = createSprite(680, 300, 20, 20);
  bow.addAnimation("bow", bowimage);



  //scale
  bow.scale = 1;





}

function draw() {


  background.velocityX = -2;





   //endless background
  if (background.x < 0) {

    background.x = background.width / 2;

  }


  if (keyWentDown("space") || mouseDown("leftButton") || mouseDown("rightButton") || touches.length > 0) {

    arrow = createSprite(640, 300, 20, 20);
    arrow.addAnimation("arrow", arrowimage);
    arrow.velocityX = -12;
    arrow.y = World.mouseY;
    arrow.scale = 0.3;
    arrow.lifetime = 60;
    arrowg.add(arrow);
    touches = [];

  }



  if (frameCount % 190 === 0) {

    red_balloon = createSprite(-3, 300);
    red_balloon.velocityX = (4 + score/2);
    red_balloon.lifetime = 240;
    red_balloon.scale = 0.1;
    red_balloon.y = Math.round(random(50, 550));
    red_balloon.addAnimation("balloon", redballoonimage);
    rb.add(red_balloon);
    //red_balloon.debug = true;
    red_balloon.setCollider("rectangle",0,0,40,30)
  }


  if (frameCount % 80 === 0) {

    blue_balloon = createSprite(-3, 300);
    blue_balloon.velocityX = (4 + score/2);
    blue_balloon.scale = 0.1;
    blue_balloon.y = Math.round(random(50, 550));
    blue_balloon.addAnimation("balloon", blueballoonimage);
    bb.add(blue_balloon);
    blue_balloon.lifetime = 240;
    blue_balloon.setCollider("rectangle",0,0,40,30)
  }


  if (frameCount % 110 === 0) {

    green_balloon = createSprite(-3, 300);
    green_balloon.velocityX = (3 + score/2);
    green_balloon.scale = 0.1;
    green_balloon.y = Math.round(random(50, 550));
    green_balloon.addAnimation("balloon", greenballoonimage);
    gb.add(green_balloon);
    green_balloon.lifetime = 240;
    green_balloon.setCollider("rectangle",0,0,40,30)
  }


  if (frameCount % 110 === 0) {

    pink_balloon = createSprite(-3, 300);
    pink_balloon.velocityX = (3 + score/2);
    pink_balloon.scale = 1.3;
    pink_balloon.y = Math.round(random(50, 550));
    pink_balloon.addAnimation("balloon", pinkballoonimage);
    pb.add(pink_balloon);
    pink_balloon.lifetime = 240;
    pink_balloon.setCollider("rectangle",0,0,40,30)
  }






  console.log(frameCount);


  bow.y = World.mouseY;


  //to burst the balloons

  if (arrowg.isTouching(rb)) {
    score = score+2;
    arrowg.destroyEach();
    rb.destroyEach();
  }

  if (arrowg.isTouching(pb)) {
      score = score+1;
    arrowg.destroyEach();
    pb.destroyEach();
  }

  if (arrowg.isTouching(gb)) {
      score = score+3;
    arrowg.destroyEach();
    gb.destroyEach();
  }

  if (arrowg.isTouching(bb)) {
score = score+1;
    arrowg.destroyEach();
    bb.destroyEach();
  }



  drawSprites();

  //score 
  fill("black")
  textSize(25);
  text("Score:" + score, 290, 50);
  //score = score + Math.round(frameCount / 93);

}




function b() {

  background = createSprite(200, 0, 400, 400);
  background.addAnimation("ha", backimage);
  background.scale = 3.5;

}