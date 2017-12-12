var canvas            = null;
var canvasContext     = null;
var framesForSeconds  = null;
var ballX             = null;
var ballY             = null;
var ballSpeedX        = null;
var ballSpeedY        = null;
var player1Pos        = null;
var player2Pos        = null;
var settingsPlayer1   = null;
var settingsPlayer2   = null;

window.onload = function() {
  canvas            = document.getElementById('game-board');
  canvasContext     = canvas.getContext("2d");
  framesForSeconds  = 30;
  ballX             = 50;
  ballY             = 150;
  ballSpeedX        = 10;
  ballSpeedY        = 4;
  paddleHeight      = 100;
  player1Pos        = 300;
  player2Pos        = 300;

  setInterval(function(){
      draw();
      move();
  },
  getInterval(framesForSeconds));
  actionsPlayers();
};


function draw()
{
  // board
  drawRect(0, 0, canvas.width, canvas.height, "black");

  //player1
  drawRect(0, player1Pos, 15, paddleHeight, "white");

  //player2
  drawRect(canvas.width - 15, player2Pos, 15, paddleHeight, "white");

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


function actionsPlayers()
{
  canvas.addEventListener("keypress", 
    function(evt) {

      settingsPlayer1 = {up : 'ArrowUp', down : 'ArrowDown'};
      settingsPlayer2 = {up : 'w', down : 's'};

      var keyName = evt.key;

      //move up player 1
      if (keyName === settingsPlayer1.up) {
         player1Pos = movePlayer(player1Pos, 'UP');

      } else {
        //move down player 1
        if(keyName === settingsPlayer1.down) {
          player1Pos =  movePlayer(player1Pos, 'DOWN');
        }
      }

      //move up player 2
      if (keyName === settingsPlayer2.up) {
         player2Pos = movePlayer(player2Pos, 'UP');
      } else {
        //move down player 2
        if(keyName === settingsPlayer2.down) {
         player2Pos = movePlayer(player2Pos, 'DOWN');
        }
      }

    }, false);
}


function movePlayer(pos, action) 
{
  var newPosition = null; 

  if ( action === 'UP') {
       newPosition =  pos - (paddleHeight / 2)
       if (newPosition <= 0) {
          newPosition = pos;
       }
  } else {
    if( action ===  'DOWN') {
       newPosition = pos + (paddleHeight / 2)

       if ( newPosition + paddleHeight >= canvas.height ) {
          newPosition = pos;
       } 
    }
  }

  return newPosition;
}
