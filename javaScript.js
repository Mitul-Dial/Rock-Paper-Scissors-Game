let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const resultMsg = document.querySelector("#msg"); 
const msg = document.querySelector("#finalMsg"); 
const userScorePara = document.querySelector("#yourScore");
const compScorePara = document.querySelector("#compScore");


const draw = () => {
    console.log("Game is draw");
    resultMsg.innerText = "Game Draw!";
    resultMsg.style.color = "#3e3e3e";
    msg.style.backgroundColor = "#fff9e6";
    
}

const winnerResult = (userWin,userChoice,compChoose) => {
    if (userWin) {
        console.log("you win");
        userScore++;
        userScorePara.innerText = userScore;
        resultMsg.innerText = `You Win! Your ${userChoice} beats ${compChoose}`;
        resultMsg.style.color = "White";
        msg.style.backgroundColor = "green";
    } else {
        console.log("you lose");
        compScore++;
        compScorePara.innerText = compScore;
        resultMsg.innerText = `You Lose! Your ${userChoice} beated by ${compChoose}`;
        resultMsg.style.color = "White";
        msg.style.backgroundColor = "Red";
    }
}

const compChoice = () => {
    const options = ["rock","paper","scissor"];
    const indexNum = Math.floor(Math.random()*3);
    let compChoose = options[indexNum];
    return compChoose;
}

const playGame = (userChoice) =>{
    console.log("userChoice  = ",userChoice);
    let compChoose = compChoice();
    console.log("computer Choice = ",compChoose);

    if(userChoice===compChoose){
        draw();
    }else{
        let userWin = true;
        if (userChoice === "rock"){
            if(compChoose==="paper"){
                userWin = false;
            }else{
                userWin =true;
            }
        }else if (userChoice === "paper"){
            if(compChoose==="rock"){
                userWin = true;
            }else{
                userWin=false;
            }
        }else{
            if(compChoose==="rock"){
                userWin = false;
            }else{
                userWin=true;
            }
        }
        winnerResult(userWin, userChoice, compChoose);
    }


}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        console.log("choice is clicked",userChoice);
        playGame(userChoice);
    });
});
