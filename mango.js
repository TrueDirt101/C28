class mango {
    constructor(x,y,r) {
      var options = {
        isStatic:true,
        restitution:0,
        friction: 1,
        density:0.5
      };
      this.body = Bodies.circle(x, y, r, options);
      this.width = r;
      this.height = r;
      r=r;
      World.add(world, this.body);
      this.mango1 = loadImage("mango.png");

    };

    display(){
      image(this.mango1,this.body.position.x-25,this.body.position.y-20,50,50);

      
     
    };
  };
  