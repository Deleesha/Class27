class Chain {

    constructor(mybodyA , mybodyB) {

        var options = {
            bodyA : mybodyA,
            bodyB : mybodyB,
            stiffness :1,
            length:200
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);


    }

    display(){

        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        strokeWeight(4);
        line(pointA.x, pointA.y,pointB.x, pointB.y);

    }

}