import { observe } from "./JS/observer"
observe()

const buttonDarkMode = document.querySelectorAll('.icon_dark_mode')
const body = document.querySelector('body')
let darkMode = localStorage.getItem("dark_mode")

const enableDarkMode = () => {
    body.classList.remove('light_mode')
    body.classList.add('dark_mode')
    buttonDarkMode.forEach(btn => btn.name = 'sunny-outline')
    localStorage.setItem("dark_mode", "enabled")
}

const disableDarkMode = () => {
    body.classList.remove('dark_mode')
    body.classList.add('light_mode')
    buttonDarkMode.forEach(btn => btn.name = 'moon-outline')
    localStorage.setItem("dark_mode", "disabled")
}

if(darkMode === "enabled"){
    enableDarkMode()
}

buttonDarkMode.forEach(btnDarkMode => {
    btnDarkMode.addEventListener('click', ()=>{
        darkMode = localStorage.getItem("dark_mode")
        if(darkMode === "disabled"){
            enableDarkMode()
        } else {
            disableDarkMode()
        }
    })
});