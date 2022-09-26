let createAccountPopup=document.querySelector('.create-account-popup')
let createAccountButton=document.querySelector('.create-account-btn')
let createAccountForm =document.querySelector('.create-account-form')

createAccountButton.addEventListener('click', ()=>{
    createAccountPopup.classList.remove('hide')
})

let nickNameInput=document.querySelector('.nick-name')
let passwordInput=document.querySelector('.password-input')
let confirmPasswordInput=document.querySelector('.confirm-password')
let emailInput=document.querySelector('.email-input')

let userDB=[{nickname:"alan", password:"smith"}]
let loginForm=document.querySelector('#login')
let usernameLogin=document.querySelector('.username-login')
let passwordLogin=document.querySelector('.password-login')



createAccountForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log('asffa')
    let nickname=nickNameInput.value
    let password=passwordInput.value    
    let confirmPassword=confirmPasswordInput.value
    let email=emailInput.value

    let user=new User(nickname, password, email)
    console.log(user)
    userDB.push(User)
    console.log(userDB)
}
)

class User {
    constructor(nickname, password, email) {
        this.nickname = nickname;
        this.password = password;
        this.email = email;
    }
}

let userAuthentication= (e)=>{
    e.preventDefault()
    let username=usernameLogin.value
    let password=passwordLogin.value
    for (x=0; x<=userDB.length; x++) {
        if (username===userDB[x].username&&password===userDB[x].password){
            console.log("logged in")
        }
    }
}

console.log(userDB)

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let username=usernameLogin.value
    let password=passwordLogin.value
    for (x=0; x<userDB.length; x++) {
        if (username===userDB[x].nickname&&password===userDB[x].password){
            console.log("logged in")
            userLogin()
        }
    }
}
)

let userLogin=()=>{
    window.location.href = "./lobby.html";
}

