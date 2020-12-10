class ball {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.x=x;
      this.y=y;
      this.r=radius
      this.body = Bodies.circle(this.x,this.y, (this.r-20)/2,options)
      this.image = loadImage("paper.png")

       World.add(world, this.body);


    }
display(){

    var ballpos=this.body.position;
    push()
    translate(ballpos.x, ballpos.y);
    rectMode(CENTER)
     fill("deeppink")
    //circle(this.body.position.x,this.body.position.y, this.r);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r)
    pop()
}



}