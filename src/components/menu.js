const menu = document.querySelector('#menu')
const header = document.querySelector('header')

menu.addEventListener('click', menuLogic)
function menuLogic(event){
    if(event.target == menu){
        header.classList.toggle('active')
        event.target.classList.toggle('fa-times')
    }
}