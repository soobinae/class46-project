var gameState = "start";

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	loganImg = loadImage("images/loganPc.png");
	emilyImg = loadImage("images/emily.png");
	carsonImg = loadImage("images/carson.png");
	trashImg = loadImage("images/trash.png");
	gameLogoImg = loadImage("images/gameLogo.png");
	backgroundImg = loadImage("images/backgroundImg.jpg");
	startbuttonImg = loadImage("images/startbutton.png");
	background1 = loadImage("images/background1.jpg");
	storyImg = loadImage("images/story.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bg = createSprite(400, 350);
	bg.addImage(backgroundImg);
	bg.scale = 2.8;

	bg1 = createSprite(400,350);
	bg1.addImage(background1);
	bg1.scale = 0.8;
	bg1.visible = false;

	story = createSprite(400,350);
	story

	gamelogo = createSprite(windowWidth/2, windowHeight/2);
	gamelogo.addImage(gameLogoImg);
	gamelogo.scale = 1.4;

	logan = createSprite(windowWidth/2-50, windowHeight-150);
	logan.addImage(loganImg);
	logan.scale = 1;

	emily = createSprite(windowWidth/2-150, windowHeight-150);
	emily.addImage(emilyImg);
	emily.scale = 0.4;

	carson = createSprite(windowWidth/1.9-1, windowHeight-180);
	carson.addImage(carsonImg);
	carson.scale = 0.5;

	ground = createSprite(windowWidth/2, windowHeight- 50, windowWidth, 10);


	Engine.run(engine);

	start = createSprite(windowWidth/2, windowHeight/2 + 100);
	start.addImage(startbuttonImg);
	start.scale = 1;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  drawSprites();
 

  if(gameState === "start"){
    if(mousePressedOver(start)){
      gameState = "play";
	}
  }

  if(gameState === "play"){
    bg1.visible = true;
	gamelogo.visible = false;
	  bg.visible = false;
	  start.visible = false;
  }
}






