let sideBarElements= document.querySelectorAll('.sidebar-ele')
let accountInformationNav=document.querySelector('.ai')
let changePasswordNav=document.querySelector('.cp')
let accountSecurityNav=document.querySelector('.as')
let changeEmailNav=document.querySelector('.ce')
let changeAvatarNav=document.querySelector('.ca')
let displayElements=document.querySelectorAll('.display-element')

let accountInformationDisplay=document.querySelector('.account-information')
let changePasswordDisplay=document.querySelector('.change-password')

accountInformationNav.addEventListener('click', ()=>{
    hideDisplayElements()
    accountInformationDisplay.classList.remove('hide')
})

changePasswordNav.addEventListener('click', ()=>{
    hideDisplayElements()
    changePasswordDisplay.classList.remove('hide')
})

let hideDisplayElements=()=>{
    displayElements.forEach(ele=>{
        if (!ele.classList.contains('hide')){
            ele.classList.add('hide')
        }
    })
}

