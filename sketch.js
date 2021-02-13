var AUP
var AUP_Animation
var BG
var Platform_Img
var Platform1
var Platform2
var Platform3
var Platform4
var Platform5
var Platform6
var Platform7

function preload() {
  AUP_Animation = loadAnimation("Animation Walk 2.png", "Animation Walk 5.png", "Animation Walk 1.png", "Animation Walk 3.png", "Animation Walk 4.png",)
  BG = loadImage("BG (Platformer Game).jpg")
  Platform_Img = loadImage("Platform (Platformer Game).png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  AUP = createSprite(displayWidth/2,displayHeight/2+10,10,10)
  AUP.addAnimation("InnerSloth", AUP_Animation)
  Platform1 = createSprite(displayWidth/2-110,displayHeight/2+286,10,10)
  Platform1.addImage(Platform_Img)
  Platform1.scale = 1
  Platform2 = createSprite(displayWidth/2-500,displayHeight/2+286,12,12)
  Platform2.addImage(Platform_Img)
  Platform2.scale = 1.2
  Platform3 = createSprite(displayWidth/2+300,displayHeight/2+286,7,7)
  Platform3.addImage(Platform_Img)
  Platform3.scale = 0.7
  Platform4 = createSprite(displayWidth/2-600,displayHeight/2+286,13,13)
  Platform4.addImage(Platform_Img)
  Platform4.scale = 1.3
  Platform5 = createSprite(displayWidth/2-200,displayHeight/2+286,9,9)
  Platform5.addImage(Platform_Img)
  Platform5.scale = 0.9
  Platform6 = createSprite(displayWidth/2+550,displayHeight/2+286,8,8)
  Platform6.addImage(Platform_Img)
  Platform6.scale = 0.8
  Platform7 = createSprite(displayWidth/2+400,displayHeight/2+286,11,11)
  Platform7.addImage(Platform_Img)
  Platform7.scale = 1.1
}
function draw() {
  background(BG);  
  drawSprites();
AUP.collide(Platform1)
AUP.collide(Platform2)
AUP.collide(Platform3)
AUP.collide(Platform4)
AUP.collide(Platform5)
AUP.collide(Platform6)
AUP.collide(Platform7)
AUP.velocityY = AUP.velocityY + 1.2
if (keyCode===32){
  AUP.velocityY = -8
}
  if (Platform1.x<0){
Platform1.x = 1700
 }
 if (Platform2.x<0){
  Platform2.x = 1700   
  }
   if (Platform3.x<0){
    Platform3.x = 1700
     }
     if (Platform4.x<0){
      Platform4.x = 1700
       }
       if (Platform5.x<0){
        Platform5.x = 1700   
        }
         if (Platform6.x<0){
          Platform6.x = 1700
           }
           if (Platform7.x<0){
            Platform7.x = 1700
             }
  Platform1.velocityX = -3
  Platform2.velocityX = -13
  Platform3.velocityX = -7
  Platform4.velocityX = -10
  Platform5.velocityX = -2
  Platform6.velocityX = -18    
  Platform7.velocityX = -17    
            }