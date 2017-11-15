var canvas            = null;
var canvasContext     = null;
var framesForSeconds  = null;
var ballX             = null;
var ballY             = null;
var ballSpeed         = null;

window.onload = function() {
  canvas            = document.getElementById('game-board');
  canvasContext     = canvas.getContext("2d");
  framesForSeconds  = 30;
  ballX             = 50;
  ballY             = 50;
  ballSpeed         = 5;

  setInterval(function(){
      draw();
      move();
  },
  getInterval(framesForSeconds))
};


function draw()
{
  // board
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height );

  //player1
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(0, 350, 15, 100);

  //player2
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(canvas.width - 15, 350, 15, 100);

  // ball
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(ballX, ballY, 10, 10);



}

function move()
{
  ballX = ballX + ballSpeed;
  if (ballX === canvas.width) {
    ballSpeed = -5;
  } else {
    if(ballX === 0) {
      ballSpeed = 5;
    }
  }
}

function getInterval(frames)
{
  return 1000 / frames;
}
