const headerBtn = document.querySelector('.headerBtn')
const menu = document.querySelector('header')
const closeMenu = document.querySelector('header .close')

window.addEventListener('pointerdown', (event)=>{
    if(event.target == closeMenu){
        menu.classList.remove('active')
    }else if(event.target == headerBtn){
            menu.classList.add('active')      
    }
})