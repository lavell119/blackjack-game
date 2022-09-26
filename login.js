let createAccountPopup=document.querySelector('.create-account-popup')
let createAccountButton=document.querySelector('.create-account-btn')
let createAccountForm =document.querySelector('.create-account-form')

createAccountButton.addEventListener('click', ()=>{
    createAccountPopup.classList.remove('hide')
})

let nickNameInput=document.querySelector('.nick-name')


createAccountForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log('asffa')
    let nickName=nickNameInput.value
    console.log(nickName)

}
)
