let gameseq=[];
let userseq=[];
 let colors=["purple","blue","pink","yellow"];

 let start=false;
 let level=0;
 let highscore = 1; 
 let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
 document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
        levelup();
    } 

 });
 function gameflash(btn){
    btn.classList.add("red");
    setTimeout(function(){
        btn.classList.remove("red");
    }, 500);
 }
 function userflash(btn){
    
    btn.classList.add("orange");
    setTimeout(function() {
        btn.classList.remove("orange");
    }, 500);
 }

 function levelup(){
    userseq=[];
    level++;
    if(level >= highscore){
        highscore = level;
    }
    h2.innerText=`level ${level}`;
    let clrindx=Math.floor(Math.random()*3);
    let rancolor=colors[clrindx];
    let rbtn=document.querySelector(`.${rancolor}`);
    gameseq.push(rancolor);
    gameflash(rbtn);
    
 }
 function checkans(ind){
    if(userseq[ind]===gameseq[ind]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any Key to Start.`;
        h3.innerHTML =`Highest Score =  ${highscore}`;
        reset();
    }
 }
 


 function buttonpress(){
    let btn=this;
    userflash(btn);
    pressedColor=btn.getAttribute("id");
    userseq.push(pressedColor);
    checkans(userseq.length-1);
 }
 let allbtns=document.querySelectorAll(".btn");
 for(btn of allbtns){
    btn.addEventListener("click",buttonpress);
 }
 function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
 }