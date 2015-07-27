class RightPaddle extends Paddle {
  update(collide) {
    super.update(collide);

    var paddleSize = this.sprite.height / 2;
    var paddlePosY = this.sprite.body.position.y;
    var ballPosY = collide.sprite.body.position.y;

    // move towards ball position
    if (ballPosY > paddlePosY) {
      if (this.sprite.body.velocity.y < 0) {
        this.sprite.body.velocity.y = 0;
      }

      this.sprite.body.velocity.y += Paddle.SPEED;
    } else if (ballPosY < paddlePosY) {
      if (this.sprite.body.velocity.y > 0) {
        this.sprite.body.velocity.y = 0;
      }

      this.sprite.body.velocity.y -= Paddle.SPEED;
    } else {
      this.sprite.body.velocity.y = 0;
    }
  }
}
