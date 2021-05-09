class Slingshot{
    constructor(bodyA, pointB){
        var option ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 20
        }
        this.pointB = pointB
        this.sling = constraint.create(option);
        worlad.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(4);
            fill("red");
            line(poinAt.x,pointA.y,pointB.x,pointB.y)

        }
    }
}