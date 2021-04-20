class Box {
  constructor(x, y, width, height, angle) {
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 3) {
      var angle = this.body.angle;
    } else  {
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility -5;
      tint(255, this.visibility);
      translate(this.body.position.x, this.body.position.y);
      pop();
    } 
    score()
      if(this.visibility < 0 && this.visibility >= 105){
        score++;
      }
    }
};