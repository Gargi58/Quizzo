var canvas, backgroundImage;
var gameState = 0;
var contestantCount;
var allContestants;
var answer , bg;
var database;

var question, contestant, quiz;

function preload()
{
  bg = loadImage("bg2.png");
  bg2 = loadImage("bg3.png");
  sound = loadSound("song.mp3");
}
function setup(){
  sound.loop();
  canvas = createCanvas(900,500);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw()
{
  background(bg);
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
