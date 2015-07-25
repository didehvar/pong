class LeftPaddle extends Paddle {
  update(collide) {
    super.update(collide);

    this.sprite.body.velocity.y = 0;

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
      this.sprite.body.velocity.y = -Paddle.SPEED;
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
      this.sprite.body.velocity.y = Paddle.SPEED;
    }
  }
}
