//your parameter variables go here!
let plane1X = 180; // x-coordinate of plane 1
let plane1Y = 15; // y-coordinate of plane 1

let noCloud = true;
let leftCloud = true;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 180;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(155, 232, 235); //(240, 255, 240)light honeydew green colour
}



function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  stroke(10, 170, 200);
  strokeWeight(4);
  line(0, 180, 200, 0); //diagonal line left to right
  line(0, 0, 200, 180); //diagonal line right to left

  if(noCloud){
    background(39, 27, 64)
    

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
    

//PAPER PLANE 2


  // fill(255);
  // triangle(
  //   80, 90, //right
  //   50, 150,
  //   70, 150);

  // triangle(
  //   80, 90,
  //   100, 150,
  //   80, 150
  // );

  // noFill();
  // stroke(255);
  // line()


  // stroke(0, 0, 0);
  // bezier(200, 20, 10,10, 90, 90, 15, 200);

//trail

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
// bezier(150, 45,
//   110, 80,
//   100, 60,
//   100, 30)

// bezier(100, 30, 
//   100, 5,
//   70, 100,
//   60, 60);

// bezier(60, 60,
//   50, 10,
//   10, 30, 
//   30, 80);

// bezier(30, 80,
//   40, 100,
//    50, 200,
//   100, 130);

// bezier(100, 130,
//   160, 30,
//   10, 80,
//   200, 150)

fill(255);
noStroke();
  // ellipse(50, 150, 80, 40
  // )
  // ellipse(70, 130, 80, 60)

  // ellipse(110, 140, 80, 60)
  // ellipse(150, 140, 70, 50)

//left cloud

// let circX = 20
// let circY = 160
// let circDi = 30

fill(195, 247, 241);
leftCloud(20, 160, 30)

function leftCloud(circX, circY, circDi){

  circle(circX, circY, circDi) ;
  circle(circX+circDi, circY-circX, circDi+circX);
  circle(circDi+(circX/4), circY-(circX/2), circDi+(circX/2));
  circle((circDi*2)+(circX/2), circY-(circX/2), circDi)
  circle(circX+circDi, circY-(circX/2), circDi+(circX/2))
  
  
}





//right cloud

let circX=

fill(222, 249, 252);
circle(140, 110, 30);
circle(150, 135, 40);
circle(160, 115, 20);
circle(180, 120, 10)


//top left cloud
fill(215, 241, 252);
circle(30, 30, 30)
circle(40, 45, 30)

circle(45, 20, 30)

circle (70, 20, 20)
circle(55, 20, 20)
circle(70, 35, 30)



  // //plane wing background bottom part
  // quad()

  //  //plane wing background bottom part
  //  quad(
  //   80, 100, //top left
  //   110, 100, //top right
  //   90, 125, //bottom right
  //   70, 125 //bottom left
  //  )

  //  //plane wing background middle part
  //  quad(70, 125, //top left
  //   89, 125, //top right
  //   50, 135, //bottom right
  //   50, 135 //bottom left
  //  )

  // //plane body
  // quad(50, 90, //top left
  //     170, 105, //top right
  //     170, 110,//bottom right
  //      50, 110); //bottom left

  // //plane wing foreground bottom part
  // quad(
  //   95, 90, //top left
  //   125, 93, //top right
  //   110, 105, //bottom right
  //   80, 105   //bottom left
  //     )

  // //plane wing foreground middle sec
  // quad(
  //   140, 40, //top right
  //   130, 30, //top left
  //   95, 90,
  //   125, 93
  // )




}
