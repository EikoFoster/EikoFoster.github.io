const sections = document.querySelectorAll('section')

for(let i = 0; i < sections.length; i++){
    window.addEventListener('scroll', animlogic)
    function animlogic(event){
        let animItem = sections[i]
        let animNavbar = document.querySelectorAll(`#navbar a`)[i]
        let animHeight = animItem.offsetHeight
        let animTop = offset(animItem).top
        let animStart = 4
        let animEnd = window.innerHeight - animHeight / animStart 

        if(scrollY < (animTop + animHeight) && (scrollY > animTop - animEnd)){
            animNavbar.classList.add('active')
            
        }else{
            animNavbar.classList.remove('active')
        }

    }

    function offset(elem){
        let par = elem.getBoundingClientRect()
        let offsetTop = window.scrollY
        let offsetLeft = window.scrollX
        return {
            top: par.top + offsetTop,
            left: par.left + offsetLeft,
            bottom: par.bottom
        }
    }

    animlogic()
}
