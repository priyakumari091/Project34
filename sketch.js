
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var roof,bob1, bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,bobDiameter;
var startBobPositionX, startBobPositionY;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	bobDiameter = 40;

	//Create the Bodies Here.

	roof = new Roof(width/2,height/4,width/7,20);
	
	startBobPositionX = width/2;
	startBobPositionY=height/4+500;
	bob1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	//bob1 = new Bob(400,40);
	bob2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
	rope1 = new Chain(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Chain(bob2.body,roof.body,-bobDiameter*1,0);
	rope3 = new Chain(bob3.body,roof.body,0,0);
	rope4 = new Chain(bob4.body,roof.body,bobDiameter*1,0);
	rope5 = new Chain(bob5.body,roof.body,bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}


function keyPressed() {
	if (keyCode === UP_ARROW) {
	
	console.log("Hello")
	//Matter.Body.setStatic(bob1.body,false);
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}


function mouseDragged(event){

	console.log(event);
// 	if(event.screenX===(startBobPositionX-bobDiameter*2)){
// 		console.log("hello")
// 			 Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
// 			 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
// 	}
// 	else if(event.screenX===(startBobPositionX-bobDiameter)){
// 		Matter.Body.setPosition(bob2.body,{x:mouseX,y:mouseY});
// }
// else if(event.screenX===(startBobPositionX)){
// 	Matter.Body.setPosition(bob3.body,{x:mouseX,y:mouseY});
// }
	
Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
// Matter.Body.setPosition(bob2.body,{x:mouseX,y:mouseY});
// Matter.Body.setPosition(bob3.body,{x:mouseX,y:mouseY});
// Matter.Body.setPosition(bob4.body,{x:mouseX,y:mouseY});
// Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY});
	
	
}



