
window.onload = function() {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

  var leftPaddle;
  var rightPaddle;
  var ball;

  var paddleBitmap;
  var ballBitmap;
  var cursors;

  function preload() {
    paddleBitmap = this.game.add.bitmapData(4, 40);
    paddleBitmap.ctx.beginPath();
    paddleBitmap.ctx.rect(0, 0, paddleBitmap.width, paddleBitmap.height);
    paddleBitmap.ctx.fillStyle = '#fff';
    paddleBitmap.ctx.fill();

    ballBitmap = this.game.add.bitmapData(6, 6);
    ballBitmap.ctx.beginPath();
    ballBitmap.ctx.rect(0, 0, ballBitmap.width, ballBitmap.height);
    ballBitmap.ctx.fillStyle = '#fff';
    ballBitmap.ctx.fill();
  }

  function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    leftPaddle = new LeftPaddle(game, 50, this.game.world.centerY, paddleBitmap);
    rightPaddle = new RightPaddle(game, this.game.world.width - 50, this.game.world.centerY, paddleBitmap);
    ball = new Ball(game, this.game.world.centerX, this.game.world.centerY, ballBitmap);
  }

  function update() {
    leftPaddle.update(ball);
    rightPaddle.update(ball);

    ball.update([leftPaddle, rightPaddle]);
  }
};
