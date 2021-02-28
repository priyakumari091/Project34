class Chain{
    constructor(body1,body2,xOffset,yOffset){

        this.xOffset = xOffset;
        this.yOffset = yOffset;
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.xOffset,y:this.yOffset},
            stiffness:1
            
        }
       this.chain = Constraint.create(options);
       World.add(world,this.chain)
    }
        display(){
            
            
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.bodyB.position;
            strokeWeight(2);

            var anchor1X = pointA.x;
            var anchor1Y = pointA.y;

            var anchor2X = pointB.x + this.xOffset;
            var anchor2Y = pointB.y + this.yOffset;

            line(anchor1X,anchor1Y,anchor2X,anchor2Y);


            
        }

    }
