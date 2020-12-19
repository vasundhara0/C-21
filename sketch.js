var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "purple";
  fixedrect.debug=true;
  movingrect=createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "blue";
  movingrect.debug=true;
}
function draw() {
  background("grey");
  movingrect.x=mouseX;
  movingrect.y=mouseY;

  if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
    && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2
    && movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
    && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2) {
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "white";
}
else {
  movingrect.shapeColor = "purple";
  fixedrect.shapeColor = "blue";
}
  drawSprites();
}