class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        var option = {
            bodyA : bodyA,
            bodyB : bodyB,
            length : 10,
            stiffness : 0.04,
            pointB : {x:this.offsetX, y:this.offsetY}
        }

        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.body = Matter.Constraint.create(option);
        World.add(world, this.body);
    }

    display(){
        push();
        var b = this.body.bodyA.position;
        var b2 = this.body.bodyB.position;
        stroke("grey");
        strokeWeight(3);
        line(b.x, b.y, b2.x, b2.y);
        pop();
    }
}