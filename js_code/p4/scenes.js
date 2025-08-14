
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

let LV;
let SV;
let EV;
let MV;

let dia = (195,187,156);

////////////////////////////// 1 /////////////////
function splash()  {
    var textX;
    var textY;
    //var loy= 0;  // exists as data saved when in the splash scene
    let btnevent1 =false;
    let btnevent2 =false;


    // scene1.setup
    this.setup = function() {
      console.log("We are at setup for splash");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      outputVolume(.15);  // turn down the volume.
      
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering splash");
        background("grey");
        textAlign(CENTER);
        textSize(30);
        noStroke();
        textFont(font1);

        // reset or disable the other scenes and their stuff
        // turn off the other scene stuff
        snd1.stop();
        // make sure ghost is gone from this scene
            love.visible = false;
     self.visible = false;
     econ.visible = false;
     misc.visible = false;
     lord.visible = false;
     inventory.visible = false;
      cave.play();

    }


    this.draw = function()
    {
      background(bg1);
      // this is the draw function for all p5.play commands
     
      // fill(200,150,0);
      // ellipse(width/2,height/2+150,260,220);
      // fill(0,120,200);
      // rect(-5,height-170,width+5,170);
      
      //   push();
        
      //   translate(width/2,loy-100);
      //   fill(10,200,160);
      //   text("Splash Down!",0,-120);
      //   ellipse(0,0,80,140);


      //   if (loy > height-140) {
      //     loy = 0;
      //   }
      //    loy++;
 
      //   pop();
     
   
                             // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      btnevent1 = checkButtonPress("Help",width-120,height-580,100,40,color(31,20,33),color(106,57,72),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playshortsound();
        this.sceneManager.showScene( help );
      }
                            // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      
      btnevent2 = checkButtonPress("Enter the temple",width/2-78,height-150,156,40,color(31,20,33),color(106,57,72),color(250));
      if (btnevent2) {   // main or next scene
        btnevent2 = false;
         playshortsound();
         this.sceneManager.showNextScene();
      }

    }

    this.keyPressed = function() {
        fill(0,255,0);
        text(keyCode, textX, textY += 10);

        if ( textY > height )  {
            textX += 20;
            textY = 0;
        }
    }

    this.mousePressed = function() {

     
    }
}

///////////////////////  2  ////////////////////////

function main()  {
   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;

   this.loy = 120;
    // var loy = 120;
  
   let btnevent1 = false;
   let btnevent2 = false;

  this.setup = function() {
      console.log("We are at setup for main");
      // make sure ghost is gone from this scene
       if ( !snd1.isPlaying() ) {
      snd1.play();
   }
  }

  this.enter = function()
  {
    console.log("We are at entering main");
    lord.position.x = 50;
    lord.position.y = 80;
    lord.position.x =  width/2;
    lord.position.y =  height/2.5;
    lord.visible = true;
    lord.scale = .80;
    lord.changeAnimation("normal");
    lord.collider = 'static';
    inventory.visible = true;
     inventory.x = 740;
  inventory.y = 465;

    love.collider = 'kinematic';
    self.collider = 'kinematic';
    econ.collider = 'kinematic';
    misc.collider = 'kinematic';

    love.x = 740;
    love.y = 430;
    self.x = 740;
    self.y = 490;
    econ.x = 740;
    econ.y = 550;
    misc.x = 740;
    misc.y = 370;
    //love.visible = true;

    self.scale = 1;
    love.scale = 1;
    econ.scale = 1;
    misc.scale = 1;
    love.changeAnimation("normal");
    self.changeAnimation("normal");
    econ.changeAnimation("normal");
    misc.changeAnimation("normal");

  

 if ( !music.isPlaying() ) {
      music.play();
   }


  }


counter = 0;
intro = 0;
ldig = 0;

sdig = 0;
edig = 0;
mdig = 0;
    this.draw = function() {
      background(bg2);

      console.log(ldig);
intro ++ 
  if (intro < 200){

  fill(color(dia));
  text("I require sacrifices.",100,100,100);
  lord.changeAnimation('stand');

  // if ( !snd1.isPlaying() ) {
  //       snd1.play();
  //   } else {
  //       snd1.pause();

  //   }
} else{
  lord.changeAnimation('normal');
  intro = 201;

}

if (ldig >2){
  ldig = 0;
}
if (sdig >2){
  sdig = 0;
}
if (edig >2){
  edig = 0;
}
if (mdig >2){
  mdig = 0;
}

      if (LV == 2){
        love.visible = true;
      } else {
        love.visible = false;
      }
      if (SV == 2){
        self.visible = true;
      } else {
        self.visible = false;
      }
    if (EV == 2){
        econ.visible = true;
      } else {
        econ.visible = false;
      }
     if (MV == 2){
        misc.visible = true;
      } else {
        misc.visible = false;
      }
   // lord.changeAnimation("normal");

  ///////////////////////////////////////////////////////////////////////
      if (love.mouse.pressing()) {
         
        love.changeAnimation("hold");
        love.position.x = mouseX;
        love.position.y = mouseY;
        mouse.cursor = 'grab';
          
      
     }  else{
       love.changeAnimation("normal");
       mouse.cursor = 'default';
       love.moveTowards(740,430);
     }
 
  if (love.x > 300 && love.x < 500) {
     if (love.y > 430 && love.y < 580) {
      love.moveTowards(400,525);
      love.caught = true
     
    
  if (love.caught = true){
  counter +=1
  
  lord.changeAnimation("stand");
  fill(dia);
  textSize(35);
    text(loveDia[ldig], 50,100,150);
  love.changeAnimation("hold");
  
}
 
if (counter > 350){
  counter = 0
  love.caught = false;
        love.visible = false;

  LV = 0;
  love.position.x = 0;
  love.position.y = 0;
       love.collider = 'dynamic';
 ldig++
}
}
 } 
///////////////////////////////////////////////////////////////////////
   if (self.mouse.pressing()) {
         
          self.changeAnimation("hold");
        self.position.x = mouseX;
        self.position.y = mouseY;
       mouse.cursor = 'grab';
          
      
     }  else{
       self.changeAnimation("normal");
       mouse.cursor = 'default';
       self.moveTowards(740,490);
     }
   

     if (self.x > 300 && self.x < 500) {
     if (self.y > 430 && self.y < 580) {
      self.moveTowards(400,525);
      self.caught = true
     
     
  if (self.caught = true){
  counter +=1
  lord.changeAnimation("stand");
  fill(dia);
  textSize(35);
 text(selfDia[sdig], 50,100,150);
  self.changeAnimation("hold");
}

if (counter > 350){
  counter = 0
  self.caught = false;
          self.visible = false;

 SV = 0;
  self.position.x = 0;
  self.position.y = 0;
       self.collider = 'dynamic';
sdig++
}
}
  }
  /////////////////////////////////////////////////////////////////////
     if (econ.mouse.pressing()) {
         
        econ.changeAnimation("hold");
        econ.position.x = mouseX;
        econ.position.y = mouseY;
       mouse.cursor = 'grab';
          
      
     }  else{
       econ.changeAnimation("normal");
       mouse.cursor = 'default';
       econ.moveTowards(740,550);
     }
     

     if (econ.x > 300 && econ.x < 500) {
     if (econ.y > 430 && econ.y < 580) {
      econ.moveTowards(400,525);
      econ.caught = true
    
     
  if (econ.caught = true){
  counter +=1
  lord.changeAnimation("stand");
  fill(dia);
  textSize(35);
  text(moneyDia[edig], 50,100,170);
  econ.changeAnimation("hold");
}

if (counter > 350){
  counter = 0
  econ.caught = false;
  econ.visible = false;
  EV = 0;
  econ.position.x = 0;
  econ.position.y = 0;
  econ.collider = 'dynamic';
 edig ++
}
 }
   }
///////////////////////////////////////////////////////////////////////
      if (misc.mouse.pressing()) {
         
        misc.changeAnimation("hold");
        misc.position.x = mouseX;
        misc.position.y = mouseY;
        mouse.cursor = 'grab';
          
      
     }  else{
      misc.changeAnimation("normal");
       mouse.cursor = 'default';
       misc.moveTowards(740,370);
     }
 
  if (misc.x > 300 && misc.x < 500) {
     if (misc.y > 430 && misc.y < 580) {
      misc.moveTowards(400,525);
      misc.caught = true
     
    
  if (misc.caught = true){
  counter +=1
  lord.changeAnimation("stand");
  fill(dia);
  textSize(35);
  text(miscDia[mdig], 50,100,150);
  misc.changeAnimation("hold");
}
 
if (counter > 350){
  counter = 0
  misc.caught = false;
        misc.visible = false;

  MV = 0;
  misc.position.x = 0;
  misc.position.y = 0;
  misc.collider = 'dynamic';
mdig ++
}
}
 } 
////////////////////////////////////////////////////////////////////////////////////////////////////////

      

    // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
  btnevent1 = checkButtonPress("Help",width-120,height-580,100,40,color(31,20,33),color(106,57,72),color(250));  
      if (btnevent1) { // help
        playshortsound();
        btnevent1 = false;
        this.sceneManager.showScene( help );
      }
 btnevent2 = checkButtonPress("Pond",width-780,height-580,100,40,color(31,20,33),color(106,57,72),color(250));  
      if (btnevent2) { // help
        playshortsound();
        btnevent2 = false;
        this.sceneManager.showScene( caught );
      }
    }  //end
  

    this.mousePressed = function()
    {

    }


}



////////////////////////////// 3 /////////////////

function help() {

    this.setup = function()  {
        console.log("We are at setup for help");
        // access a different scene using the SceneManager
 let btnevent1 = false;
  let btnevent2 = false;
    }

    this.enter = function()
    {
     console.log("We are at entering for help");
     love.visible = false;
     self.visible = false;
     econ.visible = false;
     misc.visible = false;
     lord.visible = false;
     inventory.visible = false;

     lord.position.x = 100;
     lord.position.y = 100;
   lord.scale = 1;


    }

    this.draw = function() {
      background(color(31,20,33));
      // this is the draw function for all p5.play commands
     
     
      fill(color(106,57,72));
      textAlign(CENTER);
      textSize(50);
     
      text( "Welcome to the FishLord's Temple",width/2,150)
      text( "Head over to the pond to catch a fish for the sacrifice! \n Depending on what fish you gift, the lord will offer  \ndifferent words of wisdom",width/2,250);
   
btnevent1 = checkButtonPress("Temple",width/2 +90,height-160,100,40,color(31,20,33),color(106,57,72),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playshortsound();
        this.sceneManager.showScene( main );
      }

btnevent2 = checkButtonPress("Pond",width/2-180,height-160,100,40,color(31,20,33),color(106,57,72),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
        playshortsound();
        this.sceneManager.showScene( caught );
      }

        
    }

   

}


function checkButtonPress(str,bx,by,boxW,boxH,upcolor,ovcolor,dncolor) {

  let btnc = "";
  let btnstate =false;

  // Test if the cursor is over the box
  if ( mouseX > bx - boxW &&
       mouseX < bx + boxW &&
       mouseY > by - boxH &&
       mouseY < by + boxH ) {
       overBox = true;

    if (!mouseIsPressed) {
      stroke(184,126,108);
      btnc = ovcolor;
      btnstate = false;
    } else {
      console.log(str + " pressed");
      stroke(184,126,108);
      btnc = dncolor;
      btnstate = true;
    }

  } else {
    stroke(184,126,108);
    btnc = upcolor;
    overBox = false;
  }

  push();
  translate(bx,by);
  fill(btnc);
  rect(0, 0, boxW, boxH,10); // draw the box

  fill(252,236,209);
  noStroke();
  textSize(35);
  textAlign(CENTER);
  text (str,boxW/2,28);

    pop();

    return btnstate;

}



function playshortsound() {
  if ( !snd2.isPlaying() ) {
    snd2.play();
  } else {
     snd2.stop();
 }


}

//////////////////////////////////////////////

function caught()  {

 

  let btnevent1 = false;

 this.setup = function() {
     console.log("We are at setup for caught");
     // make sure ghost is gone from this scene
    
 }

 this.enter = function()
 {
   console.log("We are at entering caught");


  inventory.visible = true;

  inventory.x = 740;
  inventory.y = 465;

   lord.visible = false;
   love.visible = true;
 love.position.x = random(100,400);
  love.position.y = random(100,400);
   love.y += (random -2,2);
  love.x += (random -2,2);
     love.collider = 'dynamic';

      self.visible = true;
 self.position.x = random(100,400);
  self.position.y = random(100,400);
  self.y += (random -2,2);
  self.x += (random -2,2);
     self.collider = 'dynamic';

     
      econ.visible = true;
 econ.position.x = random(100,400);
  econ.position.y = random(100,400);
  econ.y += (random -2,2);
  econ.x += (random -2,2);
     econ.collider = 'dynamic';

      misc.visible = true;
 misc.position.x = random(100,400);
  misc.position.y = random(100,400);
  misc.y += (random -2,2);
  misc.x += (random -2,2);
     misc.collider = 'dynamic';

 

 }




   this.draw = function() {
     background(bg3);
     // this is the draw function for all p5.play commands
     console.log(LV);
     // fill(250,180,0);
     // ellipse(width/2,height/2+100,260,260);
     // fill(0,120,200);
     // rect(-5,height-190,width+5,190);
     // ghost events defined

      //  fill("blue");
      //  text("Catch a fish!",100,100,100);

inventory.visible = true;
inventory.collider = 'static';

if(LV == 2) {
   love.x = 740;
    love.y = 430;
}
  love.y += (random -2,2);
  love.x += (random -2,2);
    if (love.x >800){
      love.x =0
    }
      if (love.y >600){
      love.y =0
    }
     if (love.x < -20){
      love.x = 800
    }
      if (love.y < -20){
      love.y = 600
    }
  
love.overlaps(inventory);

if(SV == 2) {
  self.x = 740;
  self.y = 490;
}
  self.y += (random -2,2);
  self.x += (random -2,2);
    if (self.x >800){
      self.x =0
    }
      if (self.y >600){
      self.y =0
    }
      if (self.x < -20){
      self.x = 800
    }
      if (self.y < -20){
      self.y = 600
    }
self.overlaps(inventory);

if(EV == 2) {
   econ.x = 740;
   econ.y = 550;
}
  econ.y -= (random -2,2);
  econ.x += (random -2,2);
    if (econ.x >800){
      econ.x =0
    }
      if (econ.y >600){
      econ.y =0
    }
      if (econ.x < -20){
      econ.x = 800
    }
      if (econ.y < -20){
      econ.y = 600
    }
econ.overlaps(inventory);
  
  if(MV == 2) {
   misc.x = 740;
   misc.y = 550;
}
  misc.y -= (random -2,2);
  misc.x += (random -2,2);
    if (misc.x >800){
      misc.x =0
    }
      if (misc.y >600){
      misc.y =0
    }
      if (misc.x < -20){
      misc.x = 800
    }
      if (misc.y < -20){
      misc.y = 600
    }
misc.overlaps(inventory);

  if (love.mouse.pressing()) {
         
      love.changeAnimation("hold");
      love.position.x = mouseX;
      love.position.y = mouseY;
      mouse.cursor = 'grab';
          
      
 }  else{
      love.changeAnimation("normal");
      mouse.cursor = 'default';
      
     }
 if (love.x > 700 && love.x < 790) {
     if (love.y > 400 && love.y < 590) {
      
    love.collider = 'static';
    love.x = 740;
    love.y = 430;
    LV = 2;
     }
    }
  
  if (self.mouse.pressing()) {
         
      self.changeAnimation("hold");
      self.position.x = mouseX;
      self.position.y = mouseY;
      mouse.cursor = 'grab';
          
      
 }  else{
      self.changeAnimation("normal");
      mouse.cursor = 'default';
      
     }
 if (self.x > 740 && self.x < 790) {
     if (self.y > 490 && self.y < 590) {
      
    self.collider = 'static';
    self.x = 740;
    self.y = 490;
    SV = 2;
     }
    }
  if (econ.mouse.pressing()) {
         
      econ.changeAnimation("hold");
      econ.position.x = mouseX;
      econ.position.y = mouseY;
      mouse.cursor = 'grab';
          
      
 }  else{
      econ.changeAnimation("normal");
      mouse.cursor = 'default';
      
     }
 if (econ.x > 740 && econ.x < 790) {
     if (econ.y > 490 && econ.y < 590) {
      
    econ.collider = 'static';
    econ.x = 740;
    econ.y = 550;
    EV = 2;
     }
    }

 if (misc.mouse.pressing()) {
         
      misc.changeAnimation("hold");
      misc.position.x = mouseX;
      misc.position.y = mouseY;
      mouse.cursor = 'grab';
          
      
 }  else{
      misc.changeAnimation("normal");
      mouse.cursor = 'default';
      
     }
 if (misc.x > 740 && misc.x < 790) {
     if (misc.y > 360 && misc.y < 590) {
      
    misc.collider = 'static';
    misc.x = 740;
    misc.y = 370;
    MV = 2;
     }
    }

 
    

   // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress("Help",width-120,height-580,100,40,color(31,20,33),color(106,57,72),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playshortsound();
        this.sceneManager.showScene( help );
      }
 btnevent2 = checkButtonPress("Temple",width-780,height-60,100,40,color(31,20,33),color(106,57,72),color(250));  
      if (btnevent2) { // help
        btnevent2 = false;
        playshortsound();
        this.sceneManager.showScene( main );
      }


   }  //end

   this.mousePressed = function()
   {

   }


}





