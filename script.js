let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const mess = document.querySelector("#message");
const messageContainer = document.querySelector(".message-container");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generateComputerChoice = () =>{
    const array = ["rock","paper","scissors"];
    return array[Math.floor(Math.random()*3)];
}
const playGame = (userChoice) =>{
    const compChoice = generateComputerChoice();
    if(userChoice === compChoice){
        mess.innerText = "DRAW";
        mess.style.backgroundColor = "grey";
    }
    else{
        let userWin = true;
        if((userChoice === "rock" && compChoice === "paper")||(userChoice === "paper" && compChoice === "scissors")||
        (userChoice === "scissors" && compChoice === "rock"))userWin = false;
        if(userWin){
            mess.innerText = "You Win!";
            mess.style.backgroundColor = "green";
            userScore++;
            userScorePara.innerText = userScore;
        }
        else{
            mess.innerText = "You Lose!";
            mess.style.backgroundColor = "red";
            compScore++;
            compScorePara.innerText = compScore;
        }
    }
}
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked " , userChoice);
        playGame(userChoice);
    })
})