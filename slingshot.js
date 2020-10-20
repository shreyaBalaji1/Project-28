class Line{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
        }
        this.pointB = pointB;
        this.body = Matter.Constraint.create(options);
        World.add(world, this.body);
    }

    display(){
        if(this.body.bodyA) {
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly(){
        //null - nothing/empty
        this.body.bodyA = null
    }

    attach(stone) {
        this.body.bodyA = stone;
    }
}
