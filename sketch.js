const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;
const Constraint=Matter.Constraint

var engine,world
var ground
var box1,box2,box3,box4,box5
var pig1,pig2
var log1,log2,log3,log4
var bird,bg
var slingshot
var backgroundImg
var score=0
var gameState="onSling"
//var constraintLog
function preload(){
getBackgroundImage();
}

function setup(){

//string
 var string = " this is my coding class"
  console.log(string) 
  
//number
 var num =100+100+100
  console.log(num)

//boolean 
  var bool=true
   console.log(bool) 

//undefined
 var object 
 console.log(object)
 
 //Re-assign the same undefined object to null 
 var object= null 
 console.log(object) 
 
 //ARRAY example
 //an Array holding same datatype 
 var arr1 =[1,2,3,4]
  console.log(arr1) 
  
 //an array holding different datatype
   var arr2=[1,"Alma",true,null]
    console.log(arr2) 
    arr2.push("english") 
    console.log (arr2) 
    arr2.pop(); 
    console.log(arr2)
//array storing a list of array 
var arr3 =[[1,3],[21,22],[3.9],[54.121]] 
console.log(arr3)
 console.log([0][1])


createCanvas(1200,400)
engine=Engine.create();
world=engine.world;

platform=new Ground(150,305,300,170);
ground=new Ground(600,height,1200,20);
box1=new Box(700,320,70,70);
box2=new Box(920,320,70,70);
box3=new Box(700,250,70,70);
box4=new Box(920,240,70,70);
box5=new Box(810,160,70,70);

pig1=new Pig(810,350);
pig2=new Pig(810,220);

log1=new Log(810,260,300,PI/2)
log2=new Log(810,180,300,PI/2)
log3=new Log(760,120,150,PI/7)
log4=new Log(870,120,150,-PI/7)
//constraintLog=new Log(200,200,100,PI/2)

bird=new Bird(200,200)

slingshot=new Slingshot(bird.body,{x:200,y:50})

}
function draw(){  
    if(backgroundImg)    
background(backgroundImg)

noStroke(); 
textSize(35)
 fill("white") 
 text("Score " + score, width-300, 50)

Engine.update(engine);
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
pig1.display();
pig1.score();
pig2.display();
pig2.score();
log1.display();
log2.display();
log3.display();
log4.display();
bird.display();
platform.display();
//constraintLog.display();
slingshot.display();


}

function mouseDragged(){
if(gameState!=="launched"){ 
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
 }
}
function mouseReleased(){
    slingshot.release();
    gameState="launched"
}
function keyPressed(){
if(keyCode===32){
slingshot.attach(bird.body);
}
}
async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json()
    var datetime=responseJSON.datetime 
    //console.log(datetime)
   // 2021-06-13T15:41:57.407674+05:30
var hour = datetime.slice(11,13)
console.log(hour)

if(hour>=06 && hour<=19){
     bg = "sprites/bg2.jpg"; }
      else{ bg = "sprites/bg.png"; }
       backgroundImg = loadImage(bg);
        console.log(backgroundImg);
}


