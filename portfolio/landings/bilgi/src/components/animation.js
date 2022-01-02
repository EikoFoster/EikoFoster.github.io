const animItems = document.querySelectorAll('#animatedItems')

for(let i = 0; i < animItems.length; i++){
    window.addEventListener('scroll', animLogic)
    function animLogic(){
        let animItem = animItems[i]
        let animHeight = animItem.offsetHeight
        let animTop = offset(animItem).top
        let animgStart = 4
        let animEnd = window.innerHeight - animHeight / animgStart

        if(scrollY < (animTop + animHeight) && (scrollY > animTop - animEnd)){
            animItem.classList.add('animate')
        }
    }

    function offset(elem){
        let par = elem.getBoundingClientRect()
        let offsetTop = window.scrollY
        let offsetLeft = window.scrollX
        return{
            top: par.top + offsetTop,
            left: par.left + offsetLeft
        }
    }
}