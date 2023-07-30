//your parameter variables go here!



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
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  line(0, 180, 200, 0) //diagonal line left to right
  line(0, 0, 200, 180) //diagonal line right to left


  //plane wing background bottom part
  quad()

  //plane body
  quad(50, 90, //top left
      170, 105, //top right
      170, 110,//bottom right
       50, 110); //bottom left

  //plane wing foreground bottom part
  quad(
    95, 90, //top left
    125, 90, //top right
    110, 105, //bottom right
    80, 105   //bottom left
      )

  //plane wing foreground middle sec
  quad(
    140, 40, //top right
    130, 30, //top left
    95, 90,
    125, 90
  )


}
