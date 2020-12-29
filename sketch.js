var survivalistIMG, zombieIMG, nightIMG, morningIMG
var survivalist
var zombieGroup
var Zombie, Zombie2
var NightBackground
var bullet
var scream
var score = 0;
var ZombieConfused
function setup() {
  var canvas = createCanvas(1419, 726);
  
  survivalist = createSprite(1064.25,354.75,100,100);
  survivalist.addImage(survivalistIMG,1064.25,354.75, 50, 50); 
  survivalist.velocityX = 0;
  survivalistIMG.resize(250, 0);

  Zombie = createSprite(304.75, 354.75, 100, 100); 
  Zombie.addImage(zombieIMG,354.75, 354.75 );
  zombieIMG.resize(150, 0)
  Zombie.velocityX = 3;

  Zombie2 = createSprite(354.75, 354.75, 100, 100); 
  Zombie2.addImage(zombieIMG,354.75, 354.75 );
  zombieIMG.resize(150, 0)
  Zombie2.velocityX = 3;

  zombieGroup = createGroup();
  zombieGroup.add(Zombie, Zombie2);


  bullet = createSprite(1064.25,354.75,100,100);
  bullet.addImage(bulletIMG,1064.25,354.75, 50, 50); 
  bullet.visible = false;
  bulletIMG.resize(50, 0)
  
  for (var i = 0; i < 726; i=i+20) {
    line(709.5,i,709.5,i+10);
  }
  
  Zombie.velocityX = 3;
  
 
}

function preload(){
nightIMG = loadImage("../Pictures/Night time warzone.jpg")
survivalistIMG = loadImage('../Pictures/Survivalist.png');
zombieIMG = loadImage('../Pictures/TransparentZombie.png');
bulletIMG = loadImage('../Pictures/bulletTransparent.png')
morningIMG = loadImage('../Pictures/warzone(1).jpg')

scream = loadSound('Sounds/Scream.mp3');

}

function draw() {
 
  background(nightIMG);
  if(bullet.isTouching(Zombie && Zombie2)){
   Zombie2.destroy();
   Zombie.destroy();
  }
  
  
  if(keyCode === 83){
   
    bullet.velocityX = -3;

    bullet.visible = true;

  }
  
  drawSprites();
 textFont('Langar')
 textSize(24)
 text("Can you defeat the Zombies?", 532.125, 100); 





}


function Zombie(){
  if(World.frameCount % 60 === 0){
     var ZombieConfused = createSprite(354.75, 354.75, 100, 100); 
     ZombieConfused.addImage(zombieIMG,354.75, 354.75 );
     ZombieConfused.velocityX = 11;
     ZombieConfused.y = randomNumber(25,390);
    zombieGroup.add(ZombieConfused)
  }
}
 



 


