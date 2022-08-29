let card= document.querySelectorAll('.card')

fetch("./deck.json")
.then(response=>{
    return response.json()
})
.then(data=>deck=data)
.then(deck=>console.log(deck))   

card[0].style.backgroundImage="url('deck-images/king_of_hearts.png')"

card[1].style.backgroundImage="url('deck-images/ace_of_spades.png')"