//your parameter variables go here!
let X = 100;
let Y = 60;
let headX = 40;
let headY = 40;

let eyeX = 10;
let eyeY = 10;



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 180;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  fill(247, 124, 47); //orange- body
  ellipse(X+10, Y-20, headX - 25, headY); //right ear
  ellipse(X-10, Y-20, headX - 25, headY); //left ear

  ellipse(X+20, Y+30, headX+10, headY-20); //right arm
  ellipse(X-20, Y+30, headX+10, headY-20); //left arm

  ellipse(X+10, Y+65, headX-25, headY+10); //right leg
  ellipse(X-10, Y+65, headX-25, headY+10); //left leg

  ellipse(X, Y+40, headX, headY+20); //body

  
  ellipse(X, Y, headX, headY); // head

  line(X-5, Y+5, X+5, Y+10) //mouth line 1
  line(X+5, Y+5, X-5, Y+10) //mouth line 2


  fill(50) //dark grey
  ellipse(X+10, Y-5, eyeX, eyeY); //right eye
  ellipse(X-10, Y-5, eyeX, eyeY); //left eye

}
