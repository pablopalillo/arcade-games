var canvas            = null;
var canvasContext     = null;
var framesForSeconds  = null;
var ballX             = null;
var ballY             = null;
var ballSpeedX        = null;
var ballSpeedY        = null;
var player1Pos        = null;
var player2Pos        = null;

window.onload = function() {
  canvas            = document.getElementById('game-board');
  canvasContext     = canvas.getContext("2d");
  framesForSeconds  = 30;
  ballX             = 50;
  ballY             = 150;
  ballSpeedX        = 10;
  ballSpeedY        = 4;
  player1Pos        = 300;
  player2Pos        = 300;

  setInterval(function(){
      draw();
      move();
  },
  getInterval(framesForSeconds))
};


function draw()
{
  // board
  drawRect(0, 0, canvas.width, canvas.height, "black");

  //player1
  drawRect(0, player1Pos, 15, 100, "white");

  //player2
  drawRect(canvas.width - 15, player2Pos, 15, 100, "white");

  //ball
  drawCircle(ballX, ballY, 10, "white");

}

function move()
{
  ballX = ballX + ballSpeedX;
  ballY = ballY + ballSpeedY;

  if (ballX > canvas.width) {
    ballSpeedX = -ballSpeedX;
  } else {
    if(ballX <= 0) {
      ballSpeedX = -ballSpeedX;
    }
  }

  if (ballY > canvas.height) {
    ballSpeedY = -ballSpeedY;
  } else {
    if(ballY < 0) {
      ballSpeedY = -ballSpeedY;
    }
  }
}

function getInterval(frames)
{
  return 1000 / frames;
}

function drawRect(x, y, width, height, color)
{
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, width, height);
}

function drawCircle(x, y, radius, color )
{
    /** ball **/
    canvasContext.beginPath();
    canvasContext.fillStyle = color;
    canvasContext.arc(x, y , radius, 0, Math.PI*2, true );
    canvasContext.fill()

    // point
    //canvasContext.fillStyle = "white";
    //canvasContext.fillRect(ballX, ballY, 10, 10);
}
