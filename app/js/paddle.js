class Paddle extends Sprite {
  static get SPEED() {
    return 50;
  }

  constructor(game, x, y, bitmap) {
    super(game, x, y, bitmap);

    this.sprite.body.immovable = true;
  }
}
