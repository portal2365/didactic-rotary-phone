
var snake,snakeSprite;

var food,foodSprite;

var randomX;

var randomY;

var scl=30;

function setup(){

  createCanvas(600,600);
  snake=new Snake(125,100,scl,scl);
  food=new Food(0,0,scl,scl);
  frameRate(10);
  randomX=random(0,width);
  randomY=random(0,height);
  food.foodLocation();
}

function draw(){

  background(0);
 food.display();
 snake.display();
 
if(collided()){

  food.foodLocation();
  snake.width+=scl;
}
 if(keyCode==37){

  snake.setDir(-1,0);
}
else if(keyCode==38){

  snake.setDir(0,-1);
}
else if(keyCode==39){

  snake.setDir(1,0);
}
else if(keyCode==40){

  snake.setDir(0,1);
}
}

function collided(){
if(snake.x-food.x<=food.width/2+snake.width/2+5 &&
  food.x-snake.x<=food.width/2+snake.width/2+5 &&
  snake.y-food.y<=food.height/2+snake.height/2+5 &&
  food.y-snake.y<=food.height/2+snake.height/2+5
 ){

  return true;
 }
}
   
   