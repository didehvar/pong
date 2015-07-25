
class Paddle {
  constructor(game) {
    this.game = game;
  }

  create(x, y, bitmap) {
    this.sprite = this.game.add.sprite(x, y, bitmap);
    this.sprite.anchor.set(0.5, 0.5);
  }
}
