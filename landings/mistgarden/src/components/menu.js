const header = document.querySelector('header')
const menuBtn = document.querySelector('.menu')
const menuBtns = document.querySelectorAll('.nav h6')

menuBtn.addEventListener('pointerdown', menu)
header.addEventListener('pointerdown', closeMenu)
function menu(event){
    if(event.target == menuBtn){
        header.classList.add('active')
    }
    
}

function closeMenu(event){
    for(let i = 0; i < menuBtns.length; i++){
        if(event.target == menuBtns[i]){
            header.classList.remove('active')
        }
    }
}