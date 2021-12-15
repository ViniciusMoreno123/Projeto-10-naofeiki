var mar,navio;
var navioimg,marimg;

function preload(){
marimg = loadImage("sea.png");
navioimg =loadAnimation("ship1.png","ship1.png","ship2.png","ship2.png");
}

function setup(){
  createCanvas(400,400);
  mar = createSprite(400,200)
  mar.addImage(marimg);
  mar.scale = 0.3;
  


  navio = createSprite(130,200,30,30);
  navio.addAnimation("movimentacaobarco",navioimg);
  navio.scale = 0.25;
}

function draw() {
  background("0");
  mar.velocityX = -3;
  if (mar.x< 0 ){
mar.x = mar.width/8;

  }
  



 drawSprites();
}