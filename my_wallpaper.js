//your parameter variables go here!
let plane1X = 180; // x-coordinate of plane 
let plane1Y = 15; // y-coordinate of plane 

//for background colour change and stars
let night = false; //if true, background colour is dark, adds stars
let starDi= 0; //diameter of stars in night background

//trail or no trail
let trail = true; //if true, adds an orange trail behind plane

//lines in the background booleans
let diagLines = false; //if true, diagonal lines in the background

let curvyLines = true; //if true, curvy lines in background

//cloud booleans
let clouds = true; //if true, blue clouds (for day)
let darkClouds = false; //if true, purple clouds (for night)

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
  background(155, 232, 235); //light blue sky colour

  if(night){
    background(75, 59, 120); //changes background colour to dark purple (for night)
  }
  else{background(155, 232, 235); //if night false, keep background light blue
  }
  
}
  
function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


  if(curvyLines){       //if CurvyLines true, puts curvy lines in background
  stroke(10, 170, 200); //dark blue colour
  strokeWeight(4);
  noFill();
  bezier(0, 20,         //top line
    100, 100,
    100, 100,
    200,20);

  bezier(0, 180,        //bottom line
    100, 100,
    100, 100,
    200,180);
  }

  if (diagLines){       //if diagLines true, puts two perpendicular lines in background
  stroke(10, 170, 200); //dark blue colour
  strokeWeight(4);
  line(0, 180, 200, 0); //diagonal line left to right
  line(0, 0, 200, 180); //diagonal line right to left
  }

  if(night){            //if night true, stars are added to background
    fill(255);
    noStroke();
    //1st row of stars
    circle(0, 0, starDi);
    circle(50, 0, starDi);
    circle(100, 0, starDi);
    circle(150, 0, starDi);
    circle(200, 0, starDi);
  
    //2nd row of stars
    circle(25, 30, starDi);
    circle(75, 30, starDi);
    circle(125, 30, starDi);
    circle(175, 30, starDi);
  
    //3rd row of stars
    circle(0, 60, starDi);
    circle(50, 60, starDi);
    circle(100, 60, starDi);
    circle(150, 60, starDi);
    circle(200, 60, starDi);
  
    //4th row of stars
    circle(25, 90, starDi);
    circle(75, 90, starDi);
    circle(125, 90, starDi);
    circle(175, 90, starDi);
  
    //5th row of stars
    circle(0, 120, starDi);
    circle(50, 120, starDi);
    circle(100, 120, starDi);
    circle(150, 120, starDi);
    circle(200, 120, starDi);
  
    //6th row of stars
    circle(25, 150, starDi);
    circle(75, 150, starDi);
    circle(125, 150, starDi);
    circle(175, 150, starDi);
  
    //7th row of stars
    circle(0, 180, starDi);
    circle(50, 180, starDi);
    circle(100, 180, starDi);
    circle(150, 180, starDi);
    circle(200, 180, starDi);
  }

  
//PAPER PLANE 
    noStroke();
    fill(255);//white colour

    //left wing
    triangle(plane1X, plane1Y, //right
    plane1X-40, plane1Y+5, //top
    plane1X-30, plane1Y+15); //bottom

    //right wing
    triangle(plane1X, plane1Y, //right
    plane1X-25, plane1Y+20, //top
    plane1X-10, plane1Y+35); //bottom

    //grey area in middle
    fill(220); //dark grey colour
    triangle(plane1X, plane1Y, //right
      plane1X-30, plane1Y+15, //top
      plane1X-25, plane1Y+20); //bottom

    //grey area in middle continued
    triangle(plane1X-25, plane1Y+20, //right
      plane1X-30, plane1Y+15, //top
      plane1X-30, plane1Y+30); //bottom
      

  //darkest area
    fill(150); //darker grey colour
    triangle(
      plane1X-20, plane1Y+25, //right
      plane1X-25, plane1Y+20, //top
      plane1X-30, plane1Y+30); //bottom
    

//trail
if(trail){  //if trail True, adds three orange trail lines behind plane
noFill();
stroke(255, 150, 38); //bright orange colour
strokeWeight(3);
  bezier(150, 45,     //left most trail
        100, 100,
        100, 100,
        0, 150);

  bezier(150, 45,     //middle trail
          100, 100,
          100, 100,
          0, 180);

  bezier(150, 45,     //right most trail
          100,100,
          100, 100,
          30, 180);
}


if (clouds){ //if clouds true, adds these light coloured clouds

noStroke();

//top left cloud
fill(215, 241, 252); //light blue colour
circle(30, 30, 30)
circle(40, 45, 30)

circle(45, 20, 30)

circle (70, 20, 20)
circle(55, 20, 20)
circle(70, 35, 30)

//bottom left cloud
fill(195, 247, 241); //greeny blue sorta colour
circle(20, 160, 30);
circle(50, 140, 50);
circle(35, 150, 40);
circle(70, 150, 30);
circle(50, 150, 40);
  
//right cloud
fill(222, 249, 252); //lightest blue colour
circle(140, 110, 30);
circle(150, 135, 40);
circle(160, 115, 20);
circle(180, 120, 10);
}


if(darkClouds){   //if darkClouds true, adds purple clouds (to pair with the night look)
  
noStroke();

//top left cloud
fill(175, 152, 237);
circle(30, 30, 30)
circle(40, 45, 30)

circle(45, 20, 30)

circle (70, 20, 20)
circle(55, 20, 20)
circle(70, 35, 30)

//bottom left cloud
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

}


}


