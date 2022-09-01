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

class Player {
    constructor(name, score) {
        this.score = score;
        this.name = name;
    }
}

let player1= new Player("Player1", 0)
let player2= new Player("Player2", 0)
let player3= new Player("Player3", 0)
let player4= new Player("Player4", 0)

player1.score=20
player2.score=17
player3.score=19
player4.score=14

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
    player1.score=scoreElement[0].innerText
    player2.score=scoreElement[1].innerText
    player3.score=scoreElement[2].innerText
    player4.score=scoreElement[3].innerText
    console.log(player3.score)
    testArr.forEach(player=>{
        if (player.score>22)
        testArr.pop(player)
        console.log(testArr)
     })


 }
let randomNum=(Math.floor(Math.random()*5))
 let displayWinner=()=>{
    winner.innerText=`Winner is Player ${randomNum}`
    checkWinner()
 }

 console.log(Math.floor(Math.random()*5))

 /*let calculateWinner=(score1, score2, score3, score4)=>{
    let scores=[score1, score2, score3, score4]
    scores.forEach(score=>{
        if (score>21){
            scores.pop()
        })
 }*/

let testArr=[player1, player2, player3, player4]

 testArr.forEach(player=>{
    if (player.score>22)
    testArr.pop(player)
    console.log(testArr)
 })