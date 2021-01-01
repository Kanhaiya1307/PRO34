var foodS,foodStock;
var dog,dogimg;
var hdog,hdogimg;

function preload()
{
  /*dogimg = loadImage("dogImg.png")
  hdogimg = loadImage("dogImg1.png")*/
}

function setup() {
  createCanvas(500,500);
  /*foodStock = database.ref("Food");
  foodStock.on("value",readStock);*/

  dog = createSprite(100,100,30,40);

}


function draw() {  

  drawSprites();

}



