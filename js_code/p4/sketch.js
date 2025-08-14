let loveDia = ["You should catch fish, not feelings","Dont settle for a sardine when you can have a mighty shark","There are plenty of fish in the sea, dont cry over an asshole."];




let selfDia =['Just keep swimming, because if you dont youll suffocate and die.',"Make sure you are drinking water and staying hydrated.","Whenever you are feeling down, take to the sea"];

let moneyDia =["Give a man a fish and you feed him for a day; teach a man to fish and he's gonna run off with his fishing buddy","Reaching the highest level of financial success requires some sacrifice in morality.","Hide your treasure before another pirate comes along and plunders it"]

let miscDia =["*kisses you*.... For good luck..","It’s all love now <3","You’re my favorite little shrimp"];


let bg1, bg2;
let snd1,snd2;
let font1;
let music, cave;

// var duration;
// var  slideWidth = 500;

// global manager object
var mgr;

// define your p5.play sprites that you want to use in more that 1 scene.
var lord;
var love;
var self;
var econ;
var misc;

function preload() {
    // sound should be loaded so its available for all places.
   snd1 = loadSound("assets/speak.mp3");
   music = loadSound("assets/fear.mp3");
   snd2 = loadSound("assets/whoop.ogg")
  
   cave = loadSound("assets/cave.mp3");
   font1 = loadFont("assets/Benegraphic.ttf");

   bg3 = loadImage("assets/bg_3.png");
   bg2 = loadImage("assets/bg_2.png");
   bg1 = loadImage("assets/bg_1.png");
}


function setup() {
    createCanvas(800, 600);
    //console.log(hell);
    mgr = new SceneManager();
 
    lord = createSprite(0, 0);
    lord.addAnimation("normal", "assets/fl_n1.png",  "assets/fl_n5.png");  // first image, and last image
    lord.addAnimation("stand", "assets/fl_s1.png",  "assets/fl_s5.png"); // first image, and last image
     // make the sprite invisible until you need it.
    lord.collider = 'static';
    lord.visible = false;
////////
  inventory = createSprite(0,0,100,250);
 // inventory.stroke = (184,126,108);
  inventory.color = color(31,20,33);
 inventory.stroke = color(184,126,108);

  inventory.collider = 'static';
  inventory.visible = false;
 

////////////////////
    love = createSprite(0, 0);
    love.addAnimation("normal", "assets/love_1.png");  // first image, and last image
    love.addAnimation("hold", "assets/love_2.png");  // first image, and last image
    love.visible = false;
////////////////
    
    self = createSprite(0, 0);
    self.addAnimation("normal", "assets/self_1.png");  // first image, and last image
    self.addAnimation("hold", "assets/self_2.png");  // first image, and last image
    self.visible = false;

    //////////////////////
    econ = createSprite(0, 0);
    econ.addAnimation("normal", "assets/money_1.png");  // first image, and last image
    econ.addAnimation("hold", "assets/money_2.png");  // first image, and last image
    econ.visible = false;

 //////////////////////
    misc = createSprite(0, 0);
    misc.addAnimation("normal", "assets/misc_1.png");  // first image, and last image
    misc.addAnimation("hold", "assets/misc_2.png");  // first image, and last image
    misc.visible = false;

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (splash);
    mgr.addScene (main);
    mgr.addScene (help);
    mgr.addScene (caught);
    mgr.showNextScene();
 
}
function draw()
{
 

    // passthe current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( splash );
            break;
        case '2':
            mgr.showScene( main );
            break;
        case '3':
            mgr.showScene( help );
            break;
        case 'h':
            mgr.showScene( help );
            break;
        case '4':
            mgr.showScene( caught);
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
