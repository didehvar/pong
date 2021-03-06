class LeftPaddle extends Paddle {
  update(collide) {
    super.update(collide);

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      this.sprite.body.velocity.y -= Paddle.SPEED;
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      this.sprite.body.velocity.y += Paddle.SPEED;
    } else {
      this.sprite.body.velocity.y = 0;
    }
  }
}
