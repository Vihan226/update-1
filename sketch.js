var soccer;
var pingPong;
var gameState=null;
var player;
var fieldImage;
var soccerPlayerScore;
var soccerComScore;
var home;
var goal1;
var goal2;
var goal3;
var goal4,goal5,goal6;
var border1,border2,border3,border4;
var soccerBall;
var uplayer;
var d, dImage;
var dcount;
var golfButton;
var golfbg,golfshotImage;
var golfball,ghole,gholeImage;
var golfballImage;
var holetouch;
var line;
var golfline;
var golfwall1,golfwall2;
var getback;
var rect;
var animateImage,time;
var bowlingPlayer, bowlingButton;
var h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16,h17,h18,h19,h20,getall,keep;
var bbImage;
var hitImage;
var reset;
var ad;
var bowlbounce, bowlbounce2;
var hitbounce1,hitbounce2;
var wonImpossible;
var finish;
var stick;
var ballImage;


function preload(){
fieldImage=loadImage("usefield.png")
dImage= loadImage("used.png")
golfballImage=loadImage("usegolfball.png")
golfbg=loadImage("usegolfbg.png")
gholeImage=loadImage("useghole.png")
animateImage=loadImage("animation.gif")
hitImage=loadImage("hitb.png")
bbImage=loadImage("useball.png")
finish=loadImage("finish.png")
golfshotImage=loadImage("usegolfshot.png")
stick=loadImage("usegolfstick.png")
ballImage=loadImage("sball.png")
} 
function setup() {
  createCanvas(windowWidth, windowHeight);
  
 soccer= createButton("Soccer")

  soccer.position(width/1.5-width/2,height/2-160)

  home= createButton("Home")
  home.position(width/1.8-width/2,height/2-400)


  player=createSprite(width/1.2-width/2,height/2-340,520,15)
  player.shapeColor="red"

  player.visible=false;

  goal1=createSprite(width/1.2-width/2,height/2-440,10,60)
  goal1.visible=false

  goal2=createSprite(width/.858-width/2,height/2-440,10,60)
  goal2.visible=false

  goal3=createSprite(width/1-width/2,height/2-400,600,15)
goal3.visible=false

border1=createSprite(width/1.97-width/2,height/2,10,1000)
border1.visible=false

border2=createSprite(width/.68-width/2,height/2,10,1000)
border2.visible=false



goal4=createSprite(width/1.2-width/2,height/2+427,10,60)
goal4.visible=false

goal5=createSprite(width/.860-width/2,height/2+427,10,60)
goal5.visible=false

goal6=createSprite(width/1-width/2,height/2+380,600,15)
goal6.visible=false



soccerBall=createSprite(width/1-width/2,height/2,50,40)
soccerBall.visible=false
soccerBall.addImage("soccerImagekansc",ballImage)
soccerBall.scale=.080


uplayer=createSprite(width/1-width/2,height/2+320,300,15)
uplayer.shapeColor="blue"

border3=createSprite(width/1-width/2,height/2+450,1900,10)
border3.visible=false;

border4=createSprite(width/1-width/2,height/2-460,1900,10)
border4.visible=false;

golfball=createSprite(width/1-width/2,height/2+340)
golfball.addImage("golf",golfballImage)
golfball.scale=.2
golfball.visible=false;

ghole=createSprite(width/.75-width/2,height/2-200)
ghole.addImage("hole of golf",gholeImage)
ghole.scale=.5
ghole.visible=false;

holetouch=createSprite(width/.76-width/2,height/2-133,70,20)
holetouch.visible=false;


d=createSprite(width/.73-width/2,height/2-400)
d.addImage("diamond",dImage)
d.scale=.3

line=createSprite(width/.76-width/2,height/2-100,10,50)
line.visible=false
line.shapeColor="black"

golfwall1=createSprite(width/1.9-width/2,height/2,10,1000)
golfwall1.visible=false
golfwall2=createSprite(width/.73-width/2,height/2,10,1000)
golfwall2.visible=false

getback=createSprite(width/1.14-width/2,height/2-100,500,200)
getback.visible=false


rect=createSprite(width/1.13-width/2,height/2+430)
rect.addImage("player",stick)
rect.visible=false


// bowling sprites

h1=createSprite(width/1-width/2,height/2-300)
h1.addImage("hit1",hitImage)
h1.scale=.2
h1.visible=false

h2=createSprite(width/1.1-width/2,height/2-450)
h2.addImage("hit1",hitImage)
h2.scale=.2
h2.visible=false

h3=createSprite(width/.95-width/2,height/2-550)
h3.addImage("hit1",hitImage)
h3.scale=.2
h3.visible=false


h4=createSprite(width/1-width/2,height/2-650)
h4.addImage("hit1",hitImage)
h4.scale=.2
h4.visible=false

// point in runner game
h5=createSprite(width/1-width/2,height/2-700,900,.5)
h5.visible=false

h6=createSprite(width/1.2-width/2,height/2-800)
h6.addImage("hit1",hitImage)
h6.scale=.2
h6.visible=false

h7=createSprite(width/1-width/2,height/2-850)
h7.addImage("hit1",hitImage)
h7.scale=.2
h7.visible=false

h8=createSprite(width/.95-width/2,height/2-950)
h8.addImage("hit1",hitImage)
h8.scale=.2
h8.visible=false

h9=createSprite(width/1.1-width/2,height/2-1300)
h9.addImage("hit9",hitImage)
h9.scale=.4
h9.visible=false

h10=createSprite(width/1.2-width/2,height/2-1390)
h10.addImage("hit10",hitImage)
h10.scale=.4
h10.visible=false

h11=createSprite(width/.95-width/2,height/2-1450)
h11.addImage("hit11",hitImage)
h11.scale=.4
h11.visible=false


h12=createSprite(width/1.05-width/2,height/2-1550)
h12.addImage("hit12",hitImage)
h12.scale=.4
h12.visible=false

// point in runner game

h13=createSprite(width/1-width/2,height/2-1650,900,.5)
h13.visible=false

// point finishes

h14=createSprite(width/.97-width/2,height/2-1780)
h14.addImage("hit14",hitImage)
h14.scale=.6
h14.visible=false

h15=createSprite(width/1.15-width/2,height/2-1880)
h15.addImage("hit15",hitImage)
h15.scale=.6
h15.visible=false

h16=createSprite(width/1-width/2,height/2-2000)
h16.addImage("hit16",hitImage)
h16.scale=.6
h16.visible=false

h17=createSprite(width/1.1-width/2,height/2-2100)
h17.addImage("hit17",hitImage)
h17.scale=.6
h17.visible=false

h18=createSprite(width/.96-width/2,height/2-2200)
h18.addImage("h18",hitImage)
h18.scale=.6
h18.visible=false

//gamepoint
h19=createSprite(width/1-width/2,height/2-2300,900,100)
h19.visible=false
h19.addImage("finishthegame",finish)
h19.scale=1

//gamepoint has been crossed=!

bowlingPlayer=createSprite(width/1-width/2,height/2)
bowlingPlayer.addImage("bowlingmainplayer",bbImage)
bowlingPlayer.scale=.03
bowlingPlayer.visible=false

bowlbounce=createSprite(width/.85-width/2,height/2,10,1500)
bowlbounce.shapeColor="green"
bowlbounce.visible=false
bowlbounce2=createSprite(width/1.30-width/2,height/2,10,1500)
bowlbounce2.shapeColor="green"
bowlbounce2.visible=false




  soccerPlayerScore=0
  soccerComScore=0

  golfButton= createButton("Golf")
  golfButton.position(width/1.3-width/2,height/2-160)

  
  bowlingButton= createButton("Runner")
  bowlingButton.position(width/1.1-width/2,height/2-160)

  player.velocityX=-12.1

  soccerBall.velocityY=-3;
soccerBall.velocityX=15

line.velocityX=-15

dcount=5
time=0

keep=0

reset=0

ad=""



wonImpossible=""

}

function draw() {
  background("white");
textSize(50)
fill("black")
  text(": "+dcount,width/.71-width/2,height/2-392)
  uplayer.velocityX=0
  uplayer.velocityY=0
// presses
player.bounceOff(border1)
player.bounceOff(border2)


soccerBall.bounceOff(border1)
soccerBall.bounceOff(border2)
soccerBall.bounceOff(border4)
soccerBall.bounceOff(border4)

soccerBall.bounceOff(player)
soccerBall.bounceOff(uplayer)

line.bounceOff(golfwall1)
line.bounceOff(golfwall2)



uplayer.visible=false



if(gameState==="home"){
background("white")
player.visible=false
soccerBall.visible=false
golfball.visible=false
ghole.visible=false
line.visible=false;
rect.visible=false

bowlbounce.visible=false
bowlbounce2.visible=false

textSize(10)
fill("red")
text("Click the Button on top to watch an AD to have 5 diamonds Again! Watch it when you have less than 5 Diamonds"+ad,width/1.95-width/2,height/2-450)
//bowling

h1.visible=false
h2.visible=false
h3.visible=false
h4.visible=false
h5.visible=false
h6.visible=false
h7.visible=false
h8.visible=false
h9.visible=false
h10.visible=false
h11.visible=false
h12.visible=false
h13.visible=false
h14.visible=false
h15.visible=false
h16.visible=false
h17.visible=false
h18.visible=false
h19.visible=false
bowlingPlayer.visible=false



soccer.show()
golfButton.show();
bowlingButton.show()
textSize(50)
fill("black")
  text(": "+dcount,width/.71-width/2,height/2-392)
}





  soccer.mousePressed(()=>{
gameState="soccer"
dcount=dcount-1
  })
  golfButton.mousePressed(()=>{
    gameState="golf"
    dcount=dcount-1
      })
  if(dcount<0){
    gameState="home"
  }

  bowlingButton.mousePressed(()=>{

gameState="bowling"
dcount=dcount-1
  })

  home.mousePressed(()=>{
gameState="home"
//bowling win=!!!


time=0
keep=0

//runner bowling 

h1.velocityY=0
h1.y=height/2-300

h2.x=width/1.1-width/2
h2.y=height/2-450
h2.velocityY=0

h3.x=width/.96-width/2
h3.y=height/2-550
h3.velocityY=0

h4.x=width/1-width/2
h4.y=height/2-650
h4.velocityY=0

h5.x=width/1-width/2
h5.y=height/2-700
h5.velocityY=0

h6.x=width/1.2-width/2
h6.y=height/2-800
h6.velocityY=0

h7.x=width/1-width/2
h7.y=height/2-850
h7.velocityY=0

h8.x=width/.95-width/2
h8.y=height/2-950
h8.velocityY=0

h9.x=width/1.1-width/2
h9.y=height/2-1300
h9.velocityY=0


h10.x=width/1.2-width/2
h10.y=height/2-1390
h10.velocityY=0

h11.x=width/.95-width/2
h11.y=height/2-1450
h11.velocityY=0


h12.x=width/1.05-width/2
h12.y=height/2-1550
h12.velocityY=0

h13.x=width/1-width/2
h13.y=height/2-1650
h13.velocityY=0

h14.x=width/.97-width/2
h14.y=height/2-1780
h14.velocityY=0


h15.x=width/1.15-width/2
h15.y=height/2-1880
h15.velocityY=0

h16.x=width/1-width/2
h16.y=height/2-2000
h16.velocityY=0

h17.x=width/1.1-width/2
h17.y=height/2-2100
h17.velocityY=0

h18.x=width/.96-width/2
h18.y=height/2-2200
h18.velocityY=0

h19.x=width/1-width/2
h19.y=height/2-2300
h19.velocityY=0


bowlingPlayer.x=width/1-width/2
bowlingPlayer.velocityX=0
soccerComScore=0
soccerPlayerScore=0
      })



  //soccer play.
  if(gameState==="soccer"){
   

    golfButton.hide()
    bowlingButton.hide();
    textSize(50)
fill("black")
  text(": "+dcount,width/.71-width/2,height/2-392)


    background(fieldImage)
player.visible=true;
soccerBall.visible=true;
uplayer.visible=true

player.bounceOff(border1)
player.bounceOff(border2)



soccerBall.bounceOff(border1)
soccerBall.bounceOff(border2)
soccerBall.bounceOff(border4)
soccerBall.bounceOff(border4)

soccerBall.bounceOff(player)
soccerBall.bounceOff(uplayer)
// the score conditions
if(soccerBall.isTouching(goal1)||soccerBall.isTouching(goal2)||soccerBall.isTouching(goal3)){
  soccerPlayerScore=soccerPlayerScore+1
  soccerBall.x=width/1-width/2
  soccerBall.y=height/2
}
if(soccerBall.isTouching(goal4)||soccerBall.isTouching(goal5)||soccerBall.isTouching(goal6)){
  soccerComScore=soccerComScore+1
  soccerBall.x=width/1-width/2
  soccerBall.y=height/2
}

if(soccerPlayerScore>4){
  textSize(30)
  fill("red")
text("You Win.", width/1.2-width/2,height/2)
soccerComScore=0
soccerPlayerScore=0
dcount=dcount+3

}
if(soccerComScore>4){
  textSize(30)
  fill("red")
text("You lose! Best of Luck. Take another try.", width/1.2-width/2,height/2)
soccerComScore=0
soccerPlayerScore=0
dcount=dcount-4

}
if(soccerComScore>4){
  textSize(30)
  fill("red")
text("You lose! Best of Luck. Take another try.", width/1.2-width/2,height/2)
soccerComScore=0
soccerPlayerScore=0
}

soccer.hide();
fill("black")
textSize(50)
text(""+soccerPlayerScore,width/1.6-width/2,height/2+20)

text(""+soccerComScore,width/1.6-width/2,height/2-60)


//movement to our player

if((touches.length>0 && touches[0].x<width/2  )||keyDown("a")){
  uplayer.velocityX=-12
  touches=[]
}

if((touches.length>0 && (touches[0].x>width/2 && touches[0].x<width) )||keyDown("d")){
  uplayer.velocityX=12
  touches=[]
}

  }
  // soccer is finished. Now its the turn for golf
if(gameState==="golf"){
  line.bounceOff(golfwall1)
  line.bounceOff(golfwall2)
  golfball.visible=true
  line.visible=true
  soccer.hide();
  golfButton.hide();
  bowlingButton.hide();
  background(golfbg)
  ghole.visible=true;
  if(golfball.isTouching(holetouch)){
    text("You Win",width/1.1-width/2,height/2)
  }
  if(keyDown("space")|| touches.length>0){
    golfball.x=line.x
    golfball.y=line.y
    touches=[]
    rect.visible=true
   // rect.changeImage(golfshotImage)
  }
  else{
    rect.visible=false
  }
  

  if(golfball.isTouching(getback)){
    dcount=dcount-2
    golfball.x=width/1-width/2
    golfball.y=height/2+340
  }
  textSize(30)
  text("time"+time,width/2.5-width/2,height/2)
  if(golfball.isTouching(holetouch)){
    time=time+1;
    dcount=dcount+2

  }
  if(time>0&&time<2){
   
   // golfball.x=width/1-width/2
   // golfball.y=height/2+340
ghole.x=width/1-width/2
ghole.y=height/2-200

holetouch.x=width/1.020-width/2
holetouch.y=height/2-133

getback.x=width/.7-width/2
  }
  
  if(golfball.isTouching(holetouch)&&time>0&&time<2){
    time=time+1;
    dcount=dcount+2
  }

  if(time>1){
   // golfball.x=width/1-width/2
   // golfball.y=height/2+340
ghole.x=width/1-width/2
ghole.y=height/2-200

holetouch.x=width/1.020-width/2
holetouch.y=height/2-133

getback.x=width/.1-width/2
  }
  if(golfball.isTouching(holetouch)&&time>2&&time<4){
    time=time+1;
    dcount=dcount+2;
  }
  if(time>2){
    //golfball.x=width/1-width/2
 //  golfball.y=height/2+340

    ghole.x=width/1.5-width/2
    ghole.y=height/2-200

    holetouch.x=width/1.5060-width/2
    holetouch.y=height/2-133

    getback.x=width/.9-width/2
    
   

  }

  if(golfball.isTouching(holetouch)&&time>3&&time<5){
    time=time+1;
    dcount=dcount+2;
  }
  if(time>3){
   //golfball.x=width/1-width/2
    //golfball.y=height/2+340

    ghole.x=width/.9-width/2
    ghole.y=height/2-200

    holetouch.x=width/.9050-width/2
    holetouch.y=height/2-133

    getback.x=width/1.5-width/2


  }
  if(time>4){
    
    fill("blue")
    textSize(40)
    text("To Play Again Go back to home And come back to this game. You have won the Golf Challange.Good Job!",width/1.9-width/2,height/2)
   golfball.x=width/1-width/2
    golfball.y=height/2+340
  golfball.visible=false
  }
  //rect.visible=true
}             

//golf is done. now its the time for running;

if(gameState==="bowling"){
  background("white")
  bowlingButton.hide()
  golfButton.hide()
  soccer.hide()
h1.visible=true
h2.visible=true
h3.visible=true
h4.visible=true
h6.visible=true
h7.visible=true
h8.visible=true
h9.visible=true
h10.visible=true
h11.visible=true
h12.visible=true
h14.visible=true
h15.visible=true
h16.visible=true
h17.visible=true
h18.visible=true
h19.visible=true

h1.velocityY=7
h2.velocityY=8
h3.velocityY=9
h4.velocityY=9
h5.velocityY=8
h6.velocityY=9
h7.velocityY=8
h8.velocityY=9
h9.velocityY=10
h10.velocityY=10.2
h11.velocityY=10.2
h12.velocityY=10.25
h13.velocityY=10.23
h14.velocityY=10.25
h15.velocityY=10.25
h16.velocityY=10.25
h17.velocityY=10.25
h18.velocityY=9
h19.velocityY=8

bowlingPlayer.visible=true
bowlbounce.visible=true
bowlbounce2.visible=true

bowlingPlayer.bounceOff(bowlbounce2)
bowlingPlayer.bounceOff(bowlbounce)

if(bowlingPlayer.isTouching(h1)||bowlingPlayer.isTouching(h2)||bowlingPlayer.isTouching(h3)||bowlingPlayer.isTouching(h4)||bowlingPlayer.isTouching(h6)||bowlingPlayer.isTouching(h7)||bowlingPlayer.isTouching(h8)||bowlingPlayer.isTouching(h9)||bowlingPlayer.isTouching(h10)||bowlingPlayer.isTouching(h11)||bowlingPlayer.isTouching(h12)||bowlingPlayer.isTouching(h14)||bowlingPlayer.isTouching(h15)||bowlingPlayer.isTouching(h16)||bowlingPlayer.isTouching(h17)||bowlingPlayer.isTouching(h18)){
  dcount=dcount-4
  h1.velocityY=0
  h1.y=height/2-300
  
  h2.x=width/1.1-width/2
  h2.y=height/2-450
  h2.velocityY=0

  h3.x=width/.96-width/2
h3.y=height/2-550
h3.velocityY=0

h4.x=width/1-width/2
h4.y=height/2-650
h4.velocityY=0

h5.x=width/1-width/2
h5.y=height/2-700
h5.velocityY=0

h6.x=width/1.2-width/2
h6.y=height/2-800
h6.velocityY=0

h7.x=width/1-width/2
h7.y=height/2-850
h7.velocityY=0

h8.x=width/.95-width/2
h8.y=height/2-950
h8.velocityY=0

h9.x=width/1.1-width/2
h9.y=height/2-1300
h9.velocityY=0

h10.x=width/1.2-width/2
h10.y=height/2-1390
h10.velocityY=0

h11.x=width/.95-width/2
h11.y=height/2-1450
h11.velocityY=0

h12.x=width/1.05-width/2
h12.y=height/2-1550
h12.velocityY=0

h13.x=width/1-width/2
h13.y=height/2-1650
h13.velocityY=0

h14.x=width/.97-width/2
h14.y=height/2-1780
h14.velocityY=0

h15.x=width/1.15-width/2
h15.y=height/2-1880
h15.velocityY=0

h16.x=width/1-width/2
h16.y=height/2-2000
h16.velocityY=0

h17.x=width/1.1-width/2
h17.y=height/2-2100
h17.velocityY=0

h18.x=width/.96-width/2
h18.y=height/2-2200
h18.velocityY=0

h19.x=width/1-width/2
h19.y=height/2-2300
h19.velocityY=0

  bowlingPlayer.x=width/1-width/2
  bowlingPlayer.velocityX=0
  soccerComScore=0
}

// points for this game
if(bowlingPlayer.isTouching(h5)){
  dcount=dcount+1
}
if(bowlingPlayer.isTouching(h13)){
  dcount=dcount+1
}
//gamepoint score (last but can go more)

  text("you win!"+wonImpossible,width/5-width/2,height/2)

if(bowlingPlayer.isTouching(h19)){
  dcount=dcount+1
  fill("green")
  textSize(100)
  text("you win!"+wonImpossible,width/1-width/2,height/2-200)
  

}


/*bowlingPlayer.visible=true
bowlingPlayer.bounce(h1)
bowlingPlayer.bounce(h2)
bowlingPlayer.bounce(h3)
bowlingPlayer.bounce(h4)
bowlingPlayer.bounce(h5)
bowlingPlayer.bounce(h6)
bowlingPlayer.bounce(h7)*/

if(h1.velocityY=7){
  reset=1
}
if((touches.length>0 && touches[0].x<width/2  )||keyDown("a")){
  bowlingPlayer.velocityX=-8
  touches=[]
}
if((touches.length>0 && (touches[0].x>width/2 && touches[0].x<width) )||keyDown("d")){
  bowlingPlayer.velocityX=8
  touches=[]
}




/*if(bowlingPlayer.isTouching(getall)){
 

  keep=keep+1

  
}

text("keep:"+keep,width/1-width/2,height/2)
if(keep>0){
  h1.x=width/1.5-width/2
  getall.x=width/1-width/2
  bowlingPlayer.x=width/1.5-width/2
  bowlingPlayer.y=height/2
}*/
  text(": "+dcount,width/.71-width/2,height/2-392)
}
 drawSprites();
    
}

  