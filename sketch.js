
function preload() {
  backroundImg = loadImage("snow2.jpg");
  snowImg = loadImage("snow4.webp");

}

function setup() {
  createCanvas(800,400);
 snow = createSprite(200, 170, 50, 50);
  snow.addImage(snowImg)
snow.scale=0.07;

}

function draw() {
  background(backroundImg);  
  fill("red")
  textSize(25);
  text("Find The Blue Snow Flake!",125 ,50);
  

  snow.display();
  drawSprites();
}