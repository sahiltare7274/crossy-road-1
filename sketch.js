var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var  carAnimation, logAnimation, playerAnimation;
var school;
var log, car;

function preload()
{
 carAnimation=loadAnimation("images/car1.png")

}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  car = new Car();
 
    
 }

function draw() {
  background("skyblue");
 
 for(var i=0;i<6;i++)
 {
var bottomGrass = createSprite(683,height-50-(i*400),width,grassHeight);
if(i%2===0){
var road = createSprite(683,height-150-(i*400),grassHeight,width,300);
road.shapeColor=("black");
  }
bottomGrass.shapeColor=("grey");
}

for(var i = 0;i < 40; i++){
car = new Car(2);
carGroup1.add(car.spt);

log = new Log();
  logGroup1.add(log.spt); 
}

  drawSprites();
}

