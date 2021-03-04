var back
var hotairballon
var hotairballonimage
var hotairballonAim
var hotairballonAim2
function preload() {

  hotairballonimage=loadImage("pro-C35 images/Hot Air Ballon-03.png")
back=loadImage("pro-C35 images/Hot Air Ballon-01.png")
hotairballonAim=loadImage("pro-C35 images/Hot Air Ballon-02.png")
hotairballonAim2=loadImage("pro-C35 images/Hot Air Ballon-04.png")


}
function setup() {
  createCanvas(800,400);
hotairballon=createSprite(400, 200, 50, 50);
  hotairballon.addImage("hotairballonstill",hotairballonimage)
  //hotairballon.addAnimation("hotairballonMoive",hotairballonaAim)
hotairballon.scale=0.4

  
 
 


}

function draw() {
  background(back);  
  
  
 //hotairballon.addAnimation("hotairballonimage",hotairballonimage)
//hotairballon.changeAnimation(hotairballonimage)





  drawSprites();
 }






function keyPressed(){

  if(keyUp(DOWN_ARROW)){
hotairballon.velocityY=3
    hotairballon.addImage("hotairballonAimRunning",hotairballonAim)
    hotairballon.changeImage("hotairballonAimRunning")
  }
    if(keyWentUp(UP_ARROW)){
      hotairballon.velocityY=-3
      hotairballon.addImage("hotairballonAim2Running",hotairballonAim2)
      
      hotairballon.changeImage("hotairballonAim2Running")
      
    }  
    if(keyWnetUp(RIGHT_ARROW)){
      hotairballon.velocityX=3
          hotairballon.addImage("hotairballonAimRunning",hotairballonAim)
          hotairballon.changeImage("hotairballonAimRunning")
        }

        if(keyWentUp(LEFT_ARROW)){
          hotairballon.velocityX=-3
              hotairballon.addImage("hotairballonAim2Running",hotairballonAim2)
              hotairballon.changeImage("hotairballonAim2Running")
            }


}


