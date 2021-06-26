class Ground
{
    constructor (x, y, width, height)
{
 let options = {
isStatic:true 
};

this.body = Bodies.rectangle(x, y, width, height, options);
this.w = width;
this.h = height;
World.add(world, this.body);
}
display(){
var groundpos = this.body.position
 push();
 translate(groundpos.x, groundpos.y);
 rectMode(CENTER)
 strokeWeight(4)
 //rotate(this.angle);
 rect(0, 0, this.width, this.height);
 pop();
    
}

}

