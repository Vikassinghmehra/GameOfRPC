 // Dom Caching 
 let userScore=0;
 let compScore=0;
 const userScore_span=document.getElementById("user-score");
 const compScore_span=document.getElementById("comp-score");
 const result_div=document.querySelector(".result > p");
 const scoreBoard_div=document.querySelector(".score-board");
 const rock_div=document.getElementById("Rock");
 const paper_div=document.getElementById("Paper");
 const scissors_div=document.getElementById("Scissors");


function getComputerChoice(){
    const choices =["Rock","Paper","Scissors"];
    const randomNumber=Math.floor(Math.random() * 3);
    return choices[randomNumber]; 
}
function win(userChoice,compChoice){
userScore++;
userScore_span.innerHTML=userScore;
compScore_span.innerHTML=compScore;
smallUserWord="user".fontsize(1).sub();
smallCompWord="comp".fontsize(1).sub();

// result_div.innerHTML=userChoice+ " beats " + compChoice +".You Win !!" ; // Old Method
//New Method in ES6   ${func()}
result_div.innerHTML= ` ${userChoice} ${smallUserWord} beats ${compChoice} ${smallCompWord}.You Win !!` ;
document.getElementById(userChoice).classList.add('green-glow');
setTimeout(function()
                {
                    document.getElementById(userChoice).classList.remove('green-glow')
                },700);
}

//setTimeout(function(){console.log("dsfgsagf")},3000);
function lose(userChoice,compChoice){
    compScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    smallUserWord="user".fontsize(1).sub();
    smallCompWord="comp".fontsize(1).sub(); 
    
    // result_div.innerHTML=userChoice+ " beats " + compChoice +".You Win !!" ; // Old Method
    //New Method in ES6   ${func()}
    result_div.innerHTML= ` ${userChoice} ${smallUserWord} loses to ${compChoice} ${smallCompWord}.You Lost !!` ;
    document.getElementById(userChoice).classList.add('red-glow');
        setTimeout(function()
                {
                    document.getElementById(userChoice).classList.remove('red-glow')
                },700);
        }
function draw(userChoice,compChoice){
    smallUserWord="user".fontsize(1).sub();
    smallCompWord="comp".fontsize(1).sub(); 
    result_div.innerHTML= ` ${userChoice} ${smallUserWord} draws with  ${compChoice} ${smallCompWord}` ;

    document.getElementById(userChoice).classList.add('grey-glow');
        setTimeout(function()
                {
                    document.getElementById(userChoice).classList.remove('grey-glow')
                },700);
        
}
function gameResult(userChoice){
    const computerChoice=getComputerChoice();
    //console.log(computerChoice);
    //console.log(userChoice);
    switch(userChoice+computerChoice){
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice,computerChoice);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoice,computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoice,computerChoice);
            break;
    }

}


function main(){
    rock_div.addEventListener('click',function(){
        gameResult("Rock");
    })

    paper_div.addEventListener('click',function(){
        gameResult("Paper");
    })

    scissors_div.addEventListener('click',function(){
        gameResult("Scissors");
    })
}
main();
