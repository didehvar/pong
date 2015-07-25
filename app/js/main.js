
window.onload = function() {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

  var paddleLeft;
  var paddleRight;
  var ball;

  var paddleBitmap;
  var ballBitmap;
  var cursors;

  var scoreLeft;
  var scoreRight;

  function updateScore(score) {
    if (score == 'left') {
      scoreLeft.text++;
    } else {
      scoreRight.text++;
    }
  }

  function preload() {
    paddleBitmap = game.add.bitmapData(4, 40);
    paddleBitmap.ctx.beginPath();
    paddleBitmap.ctx.rect(0, 0, paddleBitmap.width, paddleBitmap.height);
    paddleBitmap.ctx.fillStyle = '#fff';
    paddleBitmap.ctx.fill();

    ballBitmap = game.add.bitmapData(6, 6);
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
  }

  function update() {
    paddleLeft.update(ball);
    paddleRight.update(ball);

    ball.update([paddleLeft, paddleRight]);
  }
};
