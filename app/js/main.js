
window.onload = function() {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

  var SCORE_TO_WIN = 5;

  var paddleLeft;
  var paddleRight;
  var ball;

  var paddleBitmap;
  var ballBitmap;
  var cursors;

  var scoreLeft;
  var scoreRight;

  var winner;
  var restart;

  function updateScore(score) {
    ball.restart();

    if (score == 'left') {
      scoreLeft.text++;
    } else {
      scoreRight.text++;
    }
  }

  function preload() {
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.refresh();

    paddleBitmap = game.add.bitmapData(4, 40);
    paddleBitmap.ctx.beginPath();
    paddleBitmap.ctx.rect(0, 0, paddleBitmap.width, paddleBitmap.height);
    paddleBitmap.ctx.fillStyle = '#fff';
    paddleBitmap.ctx.fill();

    ballBitmap = game.add.bitmapData(10, 10);
    ballBitmap.ctx.beginPath();
    ballBitmap.ctx.rect(0, 0, ballBitmap.width, ballBitmap.height);
    ballBitmap.ctx.fillStyle = '#fff';
    ballBitmap.ctx.fill();
  }

  function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    paddleLeft = new LeftPaddle(game, 50, game.world.centerY, paddleBitmap);
    paddleRight = new RightPaddle(game, game.world.width - 50, game.world.centerY, paddleBitmap);
    ball = new Ball(game, game.world.centerX, game.world.centerY, ballBitmap, updateScore);

    scoreLeft = game.add.text(0, 0, 0, {
      fontSize: '32px',
      fill: '#fff',
      boundsAlignH: 'right'
    });
    scoreLeft.setTextBounds(0, 10, game.world.width / 2 - 10, 32);

    scoreRight = game.add.text(0, 0, 0, {
      fontSize: '32px',
      fill: '#fff',
      boundsAlignH: 'left'
    });
    scoreRight.setTextBounds(game.world.width / 2 + 10, 10, game.world.width, 32);

    winner = game.add.text(0, 0, 'WINNER\n', {
      fontSize: '64px',
      fill: '#fff',
      boundsAlignH: 'center',
      boundsAlignV: 'middle',
      align: 'center'
    });
    winner.visible = false;
    winner.setTextBounds(0, 0, game.world.width, game.world.height);

    restart = game.add.text(0, 0, 'Press ESC to restart', {
      fontSize: '24px',
      fill: '#fff',
      boundsAlignH: 'center'
    });
    restart.visible = false;
    restart.setTextBounds(0, game.world.height - 64, game.world.width, 64);

    game.input.keyboard.onDownCallback = function(event) {
      if (!game.paused || event.keyCode != Phaser.Keyboard.ESC) {
        return;
      }

      winner.visible = false;
      winner.text = 'WINNER\n';
      restart.visible = false;

      scoreLeft.text = 0;
      scoreRight.text = 0;

      game.paused = false;
    };
  }

  function update() {
    paddleLeft.update(ball);
    paddleRight.update(ball);

    ball.update([paddleLeft, paddleRight]);

    checkWin();
    function checkWin() {
      if (scoreLeft.text >= SCORE_TO_WIN) {
        winner.text += 'LEFT';
      } else if (scoreRight.text >= SCORE_TO_WIN) {
        winner.text += 'RIGHT';
      } else {
        return;
      }

      winner.visible = true;
      restart.visible = true;
      game.paused = true;
    }
  }
};
