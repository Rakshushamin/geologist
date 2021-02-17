class Sand {
    constructor(x,y,radius) {
      var options = {
        'restitution':1.3,
        'friction':5,
        'density':1.0
      }
      this.x=x;
      this.y=y;
      this.radius=radius;
      this.body = Bodies.circle(this.x,this.y,this.radius,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var rad=this.body.radius;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill("green");
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  };