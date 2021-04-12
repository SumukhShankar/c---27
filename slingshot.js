class Chain {
    constructor(body1,body2){
    var options = {
        bodyA : body1,
        bodyB : body2,
        stiffness : 1,
        length : 10,

    }

    this.body = Constraint.create(options);
    World.add(world,this.body);
    }

    display(){
    var pointA = this.body.bodyA.position;
    var pointB = this.body.bodyB.position;

    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

}