//your parameter variables go here!
let plane1X = 180; // x-coordinate of plane 1
let plane1Y = 15; // y-coordinate of plane 1

//for background colour change and stars
let night = true;

//trail or no trail
let trail = true;

//lines in the background booleans
let diagLines = false;

let curvyLines = false;

//cloud booleans
let clouds = false;
let darkClouds = false;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 180;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(155, 232, 235); //(240, 255, 240)light honeydew green colour

  if(night){
    background(75, 59, 120);
  }
  else{background(155, 232, 235);
  }
  
}
  
function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


  if(curvyLines){
  stroke(10, 170, 200);
  strokeWeight(4);
  noFill()
  bezier(0, 20,
    100, 100,
    100, 100,
    200,20)

    bezier(0, 180,
      100, 100,
      100, 100,
      200,180)
    }

  if (diagLines){
  stroke(10, 170, 200);
  strokeWeight(4);
  line(0, 180, 200, 0); //diagonal line left to right
  line(0, 0, 200, 180); //diagonal line right to left
  }

  if(night){

    let starX= 0
    let starY=0
    let starDi=5

    fill(255)
    noStroke();
    //top row
    circle(starX, starY, starDi);
    circle(starDi*10, starY, starDi);
    circle(starDi*20, starY, starDi);
    circle(150, starY, starDi);
    circle(200, starY, starDi);

    //2 row
    circle(25, starDi*6, starDi);
    circle(75, starDi*6, starDi);
    circle(125, starDi*6, starDi);
    circle(175, starDi*6, starDi);

    //3 row
    circle(0, starDi*12, starDi);
    circle(50, starDi*12, starDi);
    circle(100, starDi*12, starDi);
    circle(150, starDi*12, starDi);
    circle(200, starDi*12, starDi);

    //4 row
    circle(25, 90, starDi);
    circle(75, 90, starDi);
    circle(125, 90, starDi);
    circle(175, 90, starDi);

    //5 row
    circle(0, 120, starDi);
    circle(50, 120, starDi);
    circle(100, 120, starDi);
    circle(150, 120, starDi);
    circle(200, 120, starDi);

    //6 row
    circle(25, 150, starDi);
    circle(75, 150, starDi);
    circle(125, 150, starDi);
    circle(175, 150, starDi);

    //7 row
    circle(0, 180, starDi);
    circle(50, 180, starDi);
    circle(100, 180, starDi);
    circle(150, 180, starDi);
    circle(200, 180, starDi);
  }

  
 



  
  
  
//PAPER PLANE 1
    noStroke();
    fill(255);
    //left wing
    triangle(plane1X, plane1Y, //right
    plane1X-40, plane1Y+5, //top
    plane1X-30, plane1Y+15); //bottom

    //right wing
    triangle(plane1X, plane1Y, //right
    plane1X-25, plane1Y+20, //top
    plane1X-10, plane1Y+35); //bottom

    //grey area in middle
    fill(220);
    triangle(
      plane1X, plane1Y, //right
      plane1X-30, plane1Y+15, //top
      plane1X-25, plane1Y+20); //bottom

    //grey area in middle continued
    triangle(
      plane1X-25, plane1Y+20, //right
      plane1X-30, plane1Y+15, //top
      plane1X-30, plane1Y+30 //bottom
      );

  //dark area
    fill(150);
    triangle(
      plane1X-20, plane1Y+25, //right
      plane1X-25, plane1Y+20, //top
      plane1X-30, plane1Y+30 //bottom
    );
    

//trail

if(trail){
noFill();
stroke(255, 150, 38);
strokeWeight(3);
      bezier(150, 45,
        100,100,
        100, 100,
        0, 150);

      bezier(150, 45,
          100,100,
          100, 100,
          0, 180);

      bezier(150, 45,
          100,100,
          100, 100,
          30, 180);

      }


if (clouds){
//left cloud

fill(195, 247, 241);
noStroke();
// let circX = 20
// let circY = 160
// let circDi = 30


circle(20, 160, 30);
circle(50, 140, 50);
circle(35, 150, 40);
circle(70, 150, 30);
circle(50, 150, 40);
  


//right cloud

fill(222, 249, 252);
circle(140, 110, 30);
circle(150, 135, 40);
circle(160, 115, 20);
circle(180, 120, 10);


//top left cloud
fill(215, 241, 252);
circle(30, 30, 30)
circle(40, 45, 30)

circle(45, 20, 30)

circle (70, 20, 20)
circle(55, 20, 20)
circle(70, 35, 30)
}


if(darkClouds){
  
noStroke();
// let circX = 20
// let circY = 160
// let circDi = 30

fill(117, 99, 168);
circle(20, 160, 30);
circle(50, 140, 50);
circle(35, 150, 40);
circle(70, 150, 30);
circle(50, 150, 40);
  


//right cloud

fill(128, 105, 191);
circle(140, 110, 30);
circle(150, 135, 40);
circle(160, 115, 20);
circle(180, 120, 10);


//top left cloud
fill(175, 152, 237);
circle(30, 30, 30)
circle(40, 45, 30)

circle(45, 20, 30)

circle (70, 20, 20)
circle(55, 20, 20)
circle(70, 35, 30)

}
else{
 
}

}


