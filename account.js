let sideBarElements= document.querySelectorAll('.sidebar-ele')
let accountInformationNav=document.querySelector('.ai')
let changePasswordNav=document.querySelector('.cp')
let accountSecurityNav=document.querySelector('.as')
let changeEmailNav=document.querySelector('.ce')
let changeAvatarNav=document.querySelector('.ca')
let displayElements=document.querySelectorAll('.display-element')

let title=document.querySelector('.title')
let sideTitle=document.querySelector('.side-title')

let accountInformationDisplay=document.querySelector('.account-information')
let changePasswordDisplay=document.querySelector('.change-password')
let changeEmailDisplay=document.querySelector('.change-email')
let changeAvatarDisplay=document.querySelector('.change-avatar')
let accountSecurityDisplay=document.querySelector('.account-security')









accountInformationNav.addEventListener('click', ()=>{
    hideDisplayElements()
    accountInformationDisplay.classList.remove('hide')
    title.innerText="Account Information"
})

changePasswordNav.addEventListener('click', ()=>{
    hideDisplayElements()
    changePasswordDisplay.classList.remove('hide')
    title.innerText="Change Password"
})

changeEmailNav.addEventListener('click', ()=>{
    hideDisplayElements()
    changeEmailDisplay.classList.remove('hide')
    title.innerText="Change Email"
})

changeAvatarNav.addEventListener('click', ()=>{
    hideDisplayElements()
    changeAvatarDisplay.classList.remove('hide')
    title.innerText="Change Avatar"
})

accountSecurityNav.addEventListener('click', ()=>{
    hideDisplayElements()
    accountSecurityDisplay.classList.remove('hide')
    title.innerText="Account Security"
})




let hideDisplayElements=()=>{
    displayElements.forEach(ele=>{
        if (!ele.classList.contains('hide')){
            ele.classList.add('hide')
        }
    })
}

