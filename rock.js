class rock {
    constructor(x,y,r) {
      var options = {
        isStatic:false,
        restitution:0,
        friction: 1,
        density:0.5
      };
      this.body = Bodies.circle(x, y, r, options);
      this.width = r;
      this.height = r;
      World.add(world, this.body);
      this.rock1 = loadImage("stone.png");
      r=r;
      
    };

    display(){
      image(this.rock1,this.body.position.x-25,this.body.position.y-20,50,50);
      
    };
  };
  