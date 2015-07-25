class RightPaddle extends Sprite {
  update(collide) {
    super.update(collide);

    this.sprite.body.velocity.y = 0;

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      this.sprite.body.velocity.y = -Sprite.PADDLE_SPEED;
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      this.sprite.body.velocity.y = Sprite.PADDLE_SPEED;
    }
  }
}
