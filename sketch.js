var bg,bgImg;
var player, shooterImg, shooter_shooting;
var fire, fireImg;
var light, lightImg;
var HermioneLives = 5;
var VoldemortLives = 5;
var gamestate = "play";


function preload(){
  
  shooterImg = loadImage("assets/Hermione.png")
  //shooter_shooting = loadImage("assets/shooter_3.png")
  IncendioImg = loadImage("assets/Incendio.PNG")
  aquamentiImg = loadImage("assets/Aquamenti.PNG")
  AvadaKedavraImg = loadImage("assets/Avada Kedavra.PNG")
  LumosImg = loadImage("assets/Lumos.PNG") 
  bgImg = loadImage("assets/bg.jpeg")
  VoldemortImg = loadImage("assets/Voldemort.png")
  fireImg = loadImage("assets/fire.png")
  lightImg = loadImage("assets/light.png")
  waterImg = loadImage("assets/water.png")
  killImg = loadImage("assets/kill.png")
  sound = loadSound("nature.mp3")
  defeatImg = loadImage("assets/defeat.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  
incendio = createSprite(displayWidth-900, 200)
//expelliarmus.shapeColor = "white";
incendio.addImage(IncendioImg);
incendio.scale = 0.4;

aquamenti = createSprite(displayWidth-900, 300)
//aquamenti.shapeColor = "white";
aquamenti.addImage(aquamentiImg);
aquamenti.scale = 0.5;

AvadaKedavra = createSprite(displayWidth-900, 400)
//expelliarmus.shapeColor = "white";
AvadaKedavra.addImage(AvadaKedavraImg);
AvadaKedavra.scale = 0.3;

kill = createSprite(displayWidth-1030, displayHeight-350, 50, 50)
kill.addImage(killImg);
kill.visible = false;
kill.scale = 0.2;

kill1 = createSprite(displayWidth-100, displayHeight-300, 50, 50)
kill1.addImage(killImg);
kill1.scale = 0.2;
kill1.visible = false;

Lumos = createSprite(displayWidth-900, 500)
//expelliarmus.shapeColor = "white";
Lumos.addImage(LumosImg);
Lumos.scale = 0.25;

fire = createSprite(displayWidth-1030, displayHeight-350, 50, 50)
fire.addImage(fireImg);
fire.visible = false;
fire.scale = 0.2;

water = createSprite(displayWidth-1030, displayHeight-350, 50, 50)
water.addImage(waterImg);
water.visible =  false;
water.scale = 0.2;

light = createSprite(displayWidth-1030, displayHeight-350, 50, 50)
light.addImage(lightImg);
light.visible =  false;
light.scale = 0.2;

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.5
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

voldemort = createSprite(displayWidth-100, displayHeight-300);
voldemort.addImage(VoldemortImg)
voldemort.scale = 0.5

bg2 = createSprite(displayWidth/2-20,displayHeight/2-100,width,height+80);
bg2.addImage(defeatImg)
bg2.visible = false;
bg2.scale = 2.6;
}

function draw() {
  background(0);  

  //moving the player up and down and making the game mobile compatible using touches
  if(gamestate === "play"){
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}

if(frameCount === 400){
  kill1.visible = true;
  kill1.velocityX = -40;
}

//release bullets and change the image of shooter to shooting position when space is pressed

//player goes back to original standing image once we stop pressing the space bar
if(kill1.isTouching(player)){
  player.remove();
  gamestate = "end";
}

if(mousePressedOver(AvadaKedavra)){
  kill.visible = true;
  kill.velocityX = 40;
}

if(kill.isTouching(voldemort)){
  voldemort.remove();
}

if(mousePressedOver(incendio)){
  fire.visible = true;
  fire.velocityX = 40;
}

if(mousePressedOver(aquamenti)){
  water.visible = true;
  water.velocityX = 40;
}

if(mousePressedOver(Lumos)){
  light.visible = true;
  light.velocityX = 40;
}
}

if (gamestate === "end"){
bg2.visible = true;
}
drawSprites();
}

function mousePressed(){

}
