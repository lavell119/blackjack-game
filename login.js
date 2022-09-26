let createAccountPopup=document.querySelector('.create-account-popup')
let createAccountButton=document.querySelector('.create-account-btn')

createAccountButton.addEventListener('click', ()=>{
    createAccountPopup.classList.remove('hide')
})