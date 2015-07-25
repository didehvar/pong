
window.onload = function() {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });

  var leftPaddle = new Paddle(game);
  var rightPaddle = new Paddle(game);
  var bitmap;

  function preload () {
    bitmap = this.game.add.bitmapData(4, 40);
    bitmap.ctx.beginPath();
    bitmap.ctx.rect(0, 0, bitmap.width, bitmap.height);
    bitmap.ctx.fillStyle = '#fff';
    bitmap.ctx.fill();
  }

  function create () {
    leftPaddle.create(50, this.game.world.centerY, bitmap);
    rightPaddle.create(this.game.world.width - 50, this.game.world.centerY, bitmap);
  }

};
