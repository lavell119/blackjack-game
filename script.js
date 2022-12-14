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
let bustElement=document.querySelectorAll('.bust-ele')
let playAgainElement= document.querySelector('.play-again')
let chipCount=document.querySelectorAll('.chip-count')
let chipDeduction=document.querySelectorAll('.chip-deduction')
let chipAddition=document.querySelectorAll('.chip-addition')
let bustText=document.querySelectorAll('.bust-text')
let numberOfCards=52



class Player {
    constructor(name, score, position) {
        this.score = score;
        this.name = name;
        this.position = position;
        this.bust = false;
        this.chips = 2000;
    }
        reset () {
        this.score=0;
        this.bust=false;        
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

let i=0
hitButton.forEach (button=> {
    button.addEventListener('click', ()=>{
    let score =players[i].score
    let e = Math.floor(Math.random() * numberOfCards)
    let drawnCard=(deck[e])
    numberOfCards=numberOfCards-1
    deck.splice(e, 1)
    console.log(deck)
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
        awardChips(p)
        seat[p].classList.add('win')
        btnContainer[i].classList.add('hide')
        /*setTimeout(()=>{
            console.log('timeout')}, 3000
        )*/
        setTimeout(playAgain, 2000)
        /*let myInterval=setInterval(disp, 1000) 

        let intervalCount=()=>{
        myInterval
        }
        intervalCount()
*/
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
    seat[i].classList.remove('active')
    seat[i].classList.add('bust')
    scoreElement[i].classList.add('red')
    hitButton[i].classList.add('hide')
    players[i].bust='true'
    console.log(players[i])
    bustElement[i].classList.remove('hide')
    bustText[i].classList.remove('hide')
    nextTurn()
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

let playAgain=(i)=>{
    winner.classList.add('hide')
    playAgainElement.classList.remove('hide')
    startCountdown()

}

let pa=()=>{
    console.log(i)
}

let decrement =()=>{
    for (i=5; i>=0; i--){
            setTimeout(pa, 3000)
}
}


let x=3

let disp=()=>{
    
    if(x>0)
    {playAgainElement.innerText=`Next Game In ${x}`
    console.log(x)
    x=x-1} else {
    x=3
    console.log('Count Done.')
    clearInterval(int)
    
    restartGame()
    }
}

let int

let clearTimer=()=>{
    clearInterval(startCountdown)
}
  


let startCountdown =()=>{
    int=setInterval(disp, 1000)
}

let restartGame=()=>{
    i=0
    playAgainElement.innerText='Loading...'
    playAgainElement.classList.add('hide')
    seat.forEach(seat=>{
        if (seat.classList.contains('win')){
        seat.classList.remove('win')
        } else if (seat.classList.contains('bust')) {
            seat.classList.remove('bust')
        }
        })
    scoreElement.forEach(ele=>ele.innerText='')
    players.forEach(player=>player.reset())
    seat[i].classList.add('active')
    hitButton.forEach(button=>{
        if (button.classList.contains('hide')){
            button.classList.remove('hide')
        }
    
    })
    btnContainer[i].classList.remove('hide')
    hand.forEach(hand=>{
        hand.innerHTML=''
    })
    bustElement.forEach(ele=>{
        if (!ele.classList.contains('hide')){
            ele.classList.add('hide')
        }
    })
    bustText.forEach(ele=>{
        if (!ele.classList.contains('hide')){
            ele.classList.add('hide')
        }
    })
    takeChips()
    scoreElement.forEach(ele=>{
        if(ele.classList.contains('red')){
            ele.classList.remove('red')
        }
    })
    fetch("./deck.json")
.then(response=>{
    return response.json()
})
.then(data=>deck=data)
.then(deck=>console.log(deck)) 

numberOfCards=52

}


let startZeGame=()=>{
    setTimeout(()=>{
        seat[0].classList.add('active')
        btnContainer[0].classList.remove('hide')
        stayButton[0].classList.remove('hide')
        takeChips()
    }, 2000)
}

startZeGame()

let takeChips=()=>{
    players.forEach(player=>{
        let z=players.indexOf(player)
        console.log(z)
        player.chips=player.chips-75
        console.log(player.chips)
        chipCount[z].innerText=player.chips 
        chipDeduct()           
    })
}

let awardChips=(p)=>{
    let chips=players[p].chips
    console.log(chips)
    chips=chips+300
    players[p].chips=chips
    console.log(players[p].chips)
    chipCount[p].innerText=chips
    chipAdd(p)
}

let chipAdd=(p)=>{
    let u=chipAddition[p]
    u.classList.remove('hide')
    setTimeout(()=>{
        u.classList.add('hide')}, 5100)
}
[]
let chipDeduct=()=>{
    chipDeduction.forEach(ele=>{
        ele.classList.remove('hide')
        ele.classList.add('bold')
    })

    setTimeout(()=>{
        chipDeduction.forEach(ele=>{
            ele.classList.add('hide')
            ele.classList.remove('bold')
        })}, 3000)
}