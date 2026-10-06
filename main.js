const userChoice = document.getElementById("you")
const computerChoice = document.getElementById("comp")
const whoIsTheWinner = document.getElementById("win")

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")

rock.addEventListener("click", function(){
    userChoice.textContent = rock.innerText
    comp()
    decide(computerChoice.textContent, userChoice.textContent)
})

paper.addEventListener("click", function(){
    userChoice.textContent = paper.innerText
    comp()
    decide(computerChoice.textContent, userChoice.textContent)
})

scissor.addEventListener("click", function(){
    userChoice.textContent = scissor.innerText
    comp()
    decide(computerChoice.textContent, userChoice.textContent)
})

function comp(){
    const arr = ["✊🏻","📃","✂"]
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
