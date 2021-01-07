var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var finishedPlayers = 0;

var passedFinish = false;

var form, player, game;

var cars, car1, car2, car3, car4;

var car1image,car2image,car3image,car4image, track;

var goldmedal, silvermedal, bronzemedal;

var goldmedalImage, silvermedalImage, bronzemedalImage;

function preload(){
car1image = loadImage("images/car1.png")
car2image = loadImage("images/car2.png") 
car3image = loadImage("images/car3.png")
car4image = loadImage("images/car4.png") 
track = loadImage("images/track.jpg")
goldmedal = loadImage("images/1medal.png")
silvermedal = loadImage("images/2medal.png")
bronzemedal = loadImage("images/3medal.png")

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("lightblue")
  if(playerCount === 4 && finishedPlayers === 0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(finishedPlayers === 4){

    game.update(2)
  }


  if(gameState == 2 && finishedPlayers === 4){
    game.displayRanks();
  }
}
