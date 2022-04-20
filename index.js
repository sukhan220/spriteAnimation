const canvas = document.getElementById("mycanvas");
const context = canvas.getContext("2d");
const CANVASWIDTH = canvas.width= 600;
const CANVASHEIGHT = canvas.height = 600;
let playerState ="fly"
const stage = document.getElementById("animation");
stage.addEventListener("change",function(e){
    playerState = e.target.value;
});

// create a image ojbect
const playerImage = new Image();
playerImage.src = 'brid.png';

const spriteWidth =184;// sprite sheet every cartoon width
const spriteHeight =184;// sprite sheet every cartoon height
let gameFrame =0;// control for game frame speed
const staggerFrames =15;// for constrol animation speed
const spriteAnimation =[];
const animationStage = [
    {
        name:"fly",
        frames: 5,
    },
    {
        name : "DF",
        frames: 5,
    },
    {
        name : "turn",
        frames: 5,
    },
    {
        name : "smooth",
        frames: 5,
    },
    {
        name : "dance",
        frames: 2,
    },
];
// every state get for animaytion stage
// find locantion 
// stroge in frames location
// then push it spriteAnimation 
animationStage.forEach((state, index)=>{
    let frames ={
        loc:[],
    }
    for (let i=0;i<state.frames;i++){
        let positionX =i*spriteWidth;// exmp for 1st loop 0*575 =0 ... 1*575=575 ... 2*575= 1150 for x coordinate
        let positionY = index*spriteHeight; // exmp for 1st forEach 0*523 =0 ... 0*523=0 ... 0*523= 0 for y coordinate
        frames.loc.push({
            x:positionX,
            y:positionY
        });
    };
    spriteAnimation[state.name]=frames;
});



function animate(){
    context.clearRect(0,0,CANVASWIDTH,CANVASHEIGHT);
    let position = Math.floor(gameFrame/staggerFrames)%spriteAnimation[playerState].loc.length;
    let frameX = position*spriteWidth;
    let frameY = spriteAnimation[playerState].loc[position].y;
    //drawImage(src,spriteSheet cut out X, spriteSheet cut outY, sprite width, sprite Height, set canvas x ,set canvas y, CANVASWIDTH,CANVASHEIGHT )
    context.drawImage(playerImage,frameX,frameY,spriteWidth,spriteHeight,0,0,300,300);
    gameFrame ++;// for control game frame speed
  

    requestAnimationFrame(animate);
}
animate();