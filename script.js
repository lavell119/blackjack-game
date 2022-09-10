let card= document.querySelectorAll('.card')
let playerElement= document.querySelectorAll('.player')
let seat= document.querySelectorAll('.seat')
let testButton = document.querySelector('.test-button')
let stayButton= document.querySelectorAll('.stay-btn')
let btnContainer= document.querySelectorAll('.btn-container')
let hand= document.querySelectorAll('.hand')
let hitButton=document.querySelectorAll('.hit-btn')
let scoreElement= document.querySelectorAll('.score')
let winner= document.querySelector('.winner')
let score=0
let winnerPlayer=''
let under21Players=[]
let winningPlayer=''


class Player {
    constructor(name, score, position) {
        this.score = score;
        this.name = name;
        this.position = position;
        this.bust = false
    }
}


let player1= new Player("Player1", 0, 0)
let player2= new Player("Player2", 0, 1)
let player3= new Player("Player3", 0, 2)
let player4= new Player("Player4", 0, 3)


let players=[player1, player2, player3, player4]


fetch("./deck.json")
.then(response=>{
    return response.json()
})
.then(data=>deck=data)
.then(deck=>console.log(deck))   


let startGame=()=>{
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
    let plyr=players[i]
    plyr.score=score
    console.log(plyr.score)
    console.log(plyr)
    console.log(score)
    if(score>21){
        bust(i)
    }
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
        seat[i].classList.remove('active')
        winner.classList.remove('hide')
        displayWinner()
        let scores=[player1.score, player2.score, player3.score, player4.score]
        getUnder21Scores(scores) 
        let highScore=Math.max(...under21Scores)
        console.log(highScore)
        getWinningPlayer(highScore)
        let p=winningPlayer.position
        seat[p].classList.add('win')
        btnContainer[i].classList.add('hide')
    } else {
    seat[i].classList.remove('active')
    seat[i+1].classList.add('active')
    btnContainer[i].classList.add('hide')
    btnContainer[i+1].classList.remove('hide')
    i=i+1
    }
}


 let checkWinner=()=>{
    players.map(player=>{
        if (player.bust===true){
            return
        }   else {

        }
    }
 )}

 
let randomNum=(Math.floor(Math.random()*5))
 let displayWinner=()=>{
    
    getWinner()
 }


let getWinner=(num)=>{
    players.forEach(player=>{
        if (player.score===num){
            console.log(player.name)
        }
    })
}


let bust = (i)=>{
    hitButton[i].classList.add('hide')
    players[i].bust='true'
    console.log(players[i])
    seat[i].classList.add('bust')
}


let getWinningScore= (arr) =>{
    let under21Scores= arr.map(player=>{
        if (player.bust==='true'){
        return 
        }
        else {
            return player.score
        }
    })
    console.log(Math.max(under21Scores.toString()))
}


let getUnder21Players=(arr)=>{
    let under21Players= arr.filter(player=>
        player.bust!=='true'
    )
    console.log(under21Players)
}


let getUnder21PlayerScores=(arr) =>{
    let under21PlayerScores=arr.map(player=>{
        player=player.score
        console.log(under21PlayerScores)})
}


let under21Scores
let getUnder21Scores=(scores)=>{
    under21Scores=scores.filter(score=>score<22)
    console.log(under21Scores)
}


let getHighestScore=(scores)=>{
    let highScore=Math.max(...scores)
    console.log(highScore)
}


let getWinningPlayer=(score)=>{
    players.forEach(player=>{
        if (player.score===score){
            player.winner='true'
            console.log(player.name)
            winningPlayer=player
            winner.innerText=`Winner is ${player.name}`
        } else {
            return
        }        
    })
}