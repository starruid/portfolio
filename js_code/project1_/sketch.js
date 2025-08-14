

/*
Make sure to check out the project 1 example on custom functions first.
namely being able to make a custom function with aruguements.
 */


let currentkey = '1';
let bgc ;
let gkcount;


function setup() {
    createCanvas(800, 600);
   
    bgc = color(random(255));
    background(bgc);
    smooth();
   
    gkcount = 20;
}




function draw() {
    // triggering the clear_print function
    if( keyIsPressed) {
      clear_print();
    }
    // triggering the newkeychoice
    if(mouseIsPressed) {
     drawChoice();
    }
}




 // wrapper function ( no parameters or arguments )
function drawChoice() {

  let currentkey = key;


switch(currentkey) {
case '1':
  console.log("1");  // blue circles
  spCircle(color("blue"), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '2':
  console.log("2");  // red squares
  spSpatter(color(255,0,40,20), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '3':
  console.log("3");  // green line
  spLines(color(0,255,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '4':
  console.log("4");  // purple weird
  spPurple(color('purple'),mouseX, mouseY,400);
  break;
case '5':
  console.log("5");  // erase with bg color
  eraser(bgc,mouseX, mouseY, 70);
   break;




default:            
  console.log("None");   
  break;
}


}


function spCircle( k,  lx, ly,  px, py) {
 
  strokeWeight(1);
  stroke(k);
  fill(200,200,255);
  ellipse(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}


function spSpatter(k, lx, ly, px, py) {


  let r = random(50);
  strokeWeight(1);
  stroke(k);
  fill(k);
  for (let i = 0; i < r; i++) {
    let  wr = random(15,60);
    let  lr = random(15,60);
    let srx = random(-50,50);
    let sry = random(-50,50);
      rect(lx+srx, ly+sry, wr, lr);
  }


 
}


function spLines( k,  lx, ly,  px, py) {
  strokeWeight(1);
  stroke(k);
  rect(lx+10, ly, 2, 70);
}


function spPurple( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  line(lx, ly, sz,sz);
}


function eraser( k, lx, ly, sz) {


  fill(k);
  stroke(k);
  ellipse(lx, ly, sz,sz);
}


function clear_print() {


  // these 2 options let you choose between clearing the background
  // and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
    background(255);
  } else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  }


}


