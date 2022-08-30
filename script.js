let card= document.querySelectorAll('.card')
let player= document.querySelectorAll('.player')
let seat= document.querySelectorAll('.seat')
let testButton = document.querySelector('.test-button')



fetch("./deck.json")
.then(response=>{
    return response.json()
})
.then(data=>deck=data)
.then(deck=>console.log(deck))   

card[0].style.backgroundImage="url('deck-images/king_of_hearts.png')"

card[1].style.backgroundImage="url('deck-images/ace_of_spades.png')"

let startGame=()=>{
    player.forEach(player=()=>{
        score=0
        console.log(score)
    }
)
seat[0].classList.add('active')
}
  

testButton.addEventListener('click', ()=>{
    nextTurn()
})

let i =0
let nextTurn =()=>{
    seat[i].classList.remove('active')
    seat[i+1].classList.add('active')
    i=i+1
}


