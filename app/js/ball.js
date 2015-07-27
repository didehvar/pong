class Ball extends Sprite {
  static get SPEED() {
    return 500;
  }

  constructor(game, x, y, bitmap, updateScore) {
    super(game, x, y, bitmap);

    this.updateScore = updateScore;

    this.sprite.body.maxVelocity.x = Ball.SPEED;
    this.sprite.body.maxVelocity.y = Ball.SPEED;

    this.sprite.body.bounce.set(1);
    this.sprite.body.friction.set(1);

    this.restart();
  }

  restart() {
    var directionX = Math.random();

    this.sprite.body.velocity.set(0, 0);
    this.sprite.position.set(this.game.world.centerX, this.game.world.centerY);

    var timer = this.game.time.events.add(500, function() {
      this.sprite.body.velocity.x = directionX > 0.5 ? Ball.SPEED : -Ball.SPEED;
      this.sprite.body.velocity.y = Math.random() * 100;
    }, this);
  }

  update(collide) {
    super.update(collide);

    if (this.sprite.body.blocked.left) {
      this.updateScore('right');
    } else if (this.sprite.body.blocked.right) {
      this.updateScore('left');
    }
  }
}
