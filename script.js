let card= document.querySelectorAll('.card')
let player= document.querySelectorAll('.player')
let seat= document.querySelectorAll('.seat')
let testButton = document.querySelector('.test-button')
let stayButton= document.querySelectorAll('.stay-btn')
let btnContainer= document.querySelectorAll('.btn-container')
let hand= document.querySelectorAll('.hand')
let hitButton=document.querySelectorAll('.hit-btn')



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

hitButton.forEach (button=> 
    button.addEventListener('click', ()=>{
    let e = Math.floor(Math.random() * 52)
    let drawnCard=(deck[e])
    console.log(drawnCard.name)
    let newCard=document.createElement('div')
    newCard.classList.add('card')
    newCard.style.backgroundImage="url('deck-images/"+drawnCard.image+".png')"
    hand[i].appendChild(newCard)
    })
    )

stayButton.forEach((button)=>{
    button.addEventListener('click',()=>{
        nextTurn()
    }
)}
)

let i =0
let nextTurn =()=>{
    seat[i].classList.remove('active')
    seat[i+1].classList.add('active')
    btnContainer[i].classList.add('hide')
    btnContainer[i+1].classList.remove('hide')
    i=i+1

}


