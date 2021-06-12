class Tree extends baseClass{
    constructor(x,y){
            var options={
                isStatic : true,
                restitution: 0
            }
            super(x,y)
        
        this.image=loadImage("sprites/tree.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        //imageMode(CENTER);
        image(this.image,pos.x,pos.y);
    }
}