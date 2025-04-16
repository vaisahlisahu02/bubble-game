// ''2+2 => single code me hum sirf dynmic value hi jod skte h
// `${2+2}` => back tick me hm direct hi alue ko jod skte 

var timer = 5;
var score = 0;
var hitrn = 0;



function increaseScore(){
  score +=10;
  document.querySelector("#scoreval").textContent = score
}
function getNewHit(){
   hitrn =  Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = hitrn; 
}
function makeBubble(){
  var clutter = "";
for(var i =1; i<=102; i++){
 var rn = Math.floor(Math.random()*10)
  clutter += `<div class="bubble">${rn}</div> `;

}
document.querySelector(".pbtm").innerHTML = clutter;
}

function runTimer(){
  var timeint =  setInterval(function(){
    if(timer>0){
      timer--;
      document.querySelector("#timerval").textContent = timer;

    }
    else{
      clearInterval(timeint)
      document.querySelector(".pbtm").innerHTML = `<h1>Game Over <br>Your score is 60 </br> <br><button>Restart</button></br></h1>`;
    }
  },1000);
}

document.querySelector(".pbtm")
.addEventListener("click",function(dets){
var clickednum = (Number(dets.target.textContent));
if(clickednum === hitrn){
  increaseScore();
  makeBubble();
  getNewHit();
}
});

runTimer();
makeBubble();
getNewHit();
increaseScore();
