class Ball extends Sprite {
  static get SPEED() {
    return 500;
  }

  constructor(game, x, y, bitmap) {
    super(game, x, y, bitmap);

    this.sprite.body.maxVelocity.x = Ball.SPEED;
    this.sprite.body.maxVelocity.y = Ball.SPEED;

    var directionX = Math.random();

    // this.sprite.body.velocity.x = initialVelocity;
    // this.sprite.body.velocity.y = Ball.SPEED - initialVelocity;
    this.sprite.body.velocity.x = directionX > 0.5 ? Ball.SPEED : -Ball.SPEED;
    this.sprite.body.velocity.y = Math.random() * 100;

    this.sprite.body.bounce.set(1);
    this.sprite.body.friction.set(1);
  }

  update(collide) {
    super.update(collide);
  }
}
