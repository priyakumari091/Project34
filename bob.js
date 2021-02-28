class Bob {
    constructor(x,y,r)
	{
		var options={
			"restitution":1,
			"frictionAir":0.0,
			"slop":1,
			"inertia":Infinity,
			"isStatic":false,
			"friction":0,
			"density":0.8
			
			}
		this.x=x;
		
		this.r=r;
		this.y=y;
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			var angle = this.body.angle;
			push()
			translate(paperpos.x, paperpos.y);
			rotate(angle);
			//rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			circle(0,0,this.r);
			
            pop()
            console.log(paperpos);
			
	}
}