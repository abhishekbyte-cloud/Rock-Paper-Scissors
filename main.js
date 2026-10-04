let userChoice = document.getElementById("you")
let computerChoice = document.getElementById("comp")
let whoIsTheWinner = document.getElementById("win")

function rock(){
    userChoice.textContent = document.getElementById("rock").innerText
    comp()
    decide(computerChoice.textContent, userChoice.textContent)
}

function paper(){
    userChoice.textContent = document.getElementById("paper").innerText
    comp()
    decide(computerChoice.textContent, userChoice.textContent)
}

function scissor(){
    userChoice.textContent = document.getElementById("scissor").innerText
    comp()
    decide(computerChoice.textContent, userChoice.textContent)
}

function comp(){
    let arr = ["✊🏻","📃","✂"]
    let choice = arr[Math.floor(Math.random()*3)]
    computerChoice.textContent = choice
}

function decide(computerChoice, userChoice){
    if(userChoice == computerChoice){
        whoIsTheWinner.textContent="Nobody win"
    }
    else if((userChoice == "✊🏻") && (computerChoice == "📃")){
        whoIsTheWinner.textContent="Computer Win"
    }
    else if((userChoice == "✊🏻") && (computerChoice == "✂")){
        whoIsTheWinner.textContent="You Win"
    }
    else if((userChoice == "📃") && (computerChoice == "✊🏻")){
        whoIsTheWinner.textContent="User Win"
    }
    else if((userChoice == "📃") && (computerChoice == "✂")){
        whoIsTheWinner.textContent="Computer Win"
    }
    else if((userChoice == "✂") && (computerChoice == "✊🏻")){
        whoIsTheWinner.textContent="Computer Win"
    }
    else if((userChoice == "✂") && (computerChoice == "📃")){
        whoIsTheWinner.textContent="You Win"
    }
}
