class Sprite {
  static get PADDLE_SPEED() {
    return 200;
  }

  constructor(game, x, y, bitmap) {
    this.game = game;

    this.sprite = this.game.add.sprite(x, y, bitmap);
    this.sprite.anchor.set(0.5, 0.5);

    this.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
  }

  update(collide) {
    for (var i = 0; i < collide.length; i++) {
      this.game.physics.arcade.collide(this.sprite, collide[i].sprite);
    }
  }
}
