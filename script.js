let card= document.querySelectorAll('.card')
let player= document.querySelectorAll('.player')
let seat= document.querySelectorAll('.seat')
let testButton = document.querySelector('.test-button')
let stayButton= document.querySelectorAll('.stay-btn')
let btnContainer= document.querySelectorAll('.btn-container')
let hand= document.querySelectorAll('.hand')
let hitButton=document.querySelectorAll('.hit-btn')
let scoreElement= document.querySelectorAll('.score')
let winner= document.querySelector('.winner')
let score=0



fetch("./deck.json")
.then(response=>{
    return response.json()
})
.then(data=>deck=data)
.then(deck=>console.log(deck))   


let startGame=()=>{
    player.forEach(player=()=>{
        score=0
        console.log(score)
    }
)
seat[0].classList.add('active')
}

hitButton.forEach (button=> {
    let score =0
    button.addEventListener('click', ()=>{
    let e = Math.floor(Math.random() * 52)
    let drawnCard=(deck[e])
    console.log(drawnCard.name)
    score=score+drawnCard.value
    let newCard=document.createElement('div')
    newCard.classList.add('card')
    newCard.style.backgroundImage="url('deck-images/"+drawnCard.image+".png')"
    hand[i].appendChild(newCard)
    scoreElement[i].innerText=score
    })
}
    )

stayButton.forEach((button)=>{
    button.addEventListener('click',()=>{
        nextTurn()
    }
)}
)

let i =0
let nextTurn =()=>{
    if (i===3) {
        winner.classList.remove('hide')
        displayWinner()
    } else {
    seat[i].classList.remove('active')
    seat[i+1].classList.add('active')
    btnContainer[i].classList.add('hide')
    btnContainer[i+1].classList.remove('hide')
    i=i+1
    }
}

 let checkWinner=()=>{
    let player1Score=scoreElement[0].innerText
    let player2Score=scoreElement[1].innerText
    let player3Score=scoreElement[2].innerText
    let player4Score=scoreElement[3].innerText
    let highScore = Math.max(player1Score, player2Score, player3Score, player4Score)

 }
let randomNum=(Math.floor(Math.random()*5))
 let displayWinner=()=>{
    winner.innerText=`Winner is Player ${randomNum}`
 }

 console.log(Math.floor(Math.random()*5))