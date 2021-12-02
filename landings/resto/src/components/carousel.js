const slider = document.querySelector('.home-slider')
const wrapper = document.querySelector('.wrapper')
const points = document.querySelectorAll('.slide-points')
const firstPoint = document.querySelector('.first-point')
const secondPoint = document.querySelector('.second-point')
const thirdPoint = document.querySelector('.third-point')

slider.addEventListener('click', carouselWork)
function carouselWork(event){
    if(event.target == firstPoint || event.target == secondPoint || event.target == thirdPoint){
        firstPoint.classList.remove('active')
        secondPoint.classList.remove('active')
        thirdPoint.classList.remove('active')
    }
    
    if(event.target == firstPoint){
        event.target.classList.add('active')
        wrapper.style.cssText = `transform: translateX(0);`
    }else if(event.target == secondPoint){
        event.target.classList.add('active')
        wrapper.style.cssText = `transform: translateX(-35%);`
    }else if(event.target == thirdPoint){
        event.target.classList.add('active')
        wrapper.style.cssText = `transform: translateX(-70%);`
    }
}