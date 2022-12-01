console.log("hello world");
const display = document.getElementById("display");
const userChoice = document.getElementById("userChoice");
const computerChoice = document.getElementById("computerChoice");


let choice = 0;
function userPlay(){
  const rockBtn = document.getElementById("rock");
  rockBtn.addEventListener("click" , ()=>{
    console.log("rock");
    userChoice.innerHTML = "Rock";
    playRound(0,computerPlay());
  })
  const paperBtn = document.getElementById("paper");
  paperBtn.addEventListener("click" , ()=>{
    console.log("paper");
    userChoice.innerHTML = "Paper";
    choice=1;
    playRound(1,computerPlay());
  });
  const scissorBtn = document.getElementById("scissor");
  scissorBtn.addEventListener("click" , ()=>{
    console.log("scissor");
    userChoice.innerHTML = "Scissor";
    choice=2;
    playRound(2,computerPlay());
  }); 
  
  return choice; 
}

const user = userPlay();

function computerPlay(){
  let choice = ["Rock","Paper","Scissor"];
  let random = Math.floor(Math.random()*choice.length);
  console.log(choice[random]);
  computerChoice.innerHTML = choice[random];
  return random;
}

const computer = computerPlay();

function playRound(user , computer){
  if(user == computer){
    display.innerHTML = "It's a tie";
  }
  else if(user == 0 && computer == 1){
    display.innerHTML = "You Lose! Paper beats Rock";
  }
  else if(user == 0 && computer == 2){
    display.innerHTML = "You Win! Rock beats Scissor";
  }
  else if(user == 1 && computer == 0){
    display.innerHTML = "You Win! Paper beats Rock";
  }
  else if(user == 1 && computer == 2){
    display.innerHTML = "You Lose! Scissor beats Paper";
  }
  else if(user == 2 && computer == 0){
    display.innerHTML = "You Lose! Rock beats Scissor";
  }
  else if(user == 2 && computer == 1){
    display.innerHTML = "You Win! Scissor beats Paper";
  }
}

