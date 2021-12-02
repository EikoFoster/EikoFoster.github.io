const imgsMenu = ['/landings/resto/src/assets/imgs/menu-']

function getArrOfObjMenu(){
    let local = []
    for(let i = 1; i < 10; i++){
        local.push({
            img: `${imgsMenu + i}.jpg`
        })
    }
    return local
}

const productsMenu = {
    container: null,
    items: [],
    init(){
        this.container = document.querySelector('#menu .box-container')
        this._fillCatalog()
        this._render()
    },
    _fillCatalog(){
        this.items = getArrOfObjMenu()
    },
    _render(){
        let htmlStr = ''
        this.items.forEach(item => {
            return htmlStr+= `  <div class="box">
                                    <div class="image">
                                        <img src="${item.img}" alt="">
                                        <a href="#" class="fas fa-heart"></a>
                                    </div>

                                    <div class="content">
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star-half-alt"></i>
                                        </div>
                                        <h3>delicious food</h3>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                            Necessitatibus tempora itaque vitae eveniet minima 
                                            optio? 
                                        </p>
                                        <a href="#" class="btn">ad to cart</a>
                                        <span class="price">$12.99</span>
                                    </div>
                                </div>
            
            
            
            `
        })

        this.container.innerHTML = htmlStr
    }
}

productsMenu.init()