const menuBtn = document.querySelector('#menu-bars')
const navbar = document.querySelector('#navbar')
const searchIcon = document.querySelector('#search-icon')
const searchForm = document.querySelector('#search-form')
const searchClose = document.querySelector('#close')

menuBtn.addEventListener('click', menuActive)
window.addEventListener('click', search)

function menuActive(event){
    event.target.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

function search(event){
    if(event.target == searchIcon){
        searchForm.classList.add('active')
        
    }else if(event.target == searchClose){
        searchForm.classList.remove('active')
    }
        

}

