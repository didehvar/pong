
class Paddle {
  constructor(game) {
    this.game = game;
  }

  preload(key) {
    var bitmap = this.game.add.bitmapData(5, 40);
    bitmap.ctx.beginPath();
    bitmap.ctx.rect(0, 0, bitmap.width, bitmap.height);
    bitmap.ctx.fillStyle = '#fff';
    bitmap.ctx.fill();

    this.sprite = this.game.add.sprite(30, this.game.world.centerY, bitmap);
    this.sprite.anchor.set(0.5, 0.5);
  }
}
