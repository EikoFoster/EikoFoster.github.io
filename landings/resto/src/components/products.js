const imgs = ['/landings/resto/src/assets/imgs/dish-']

function getArrOfObj(){
    let local = []
    for(let i = 1; i < 7; i++){
        local.push({
            img: `${imgs + i}.png`
        })
    }
    return local
}

const products = {
    container: null,
    items: [],
    init(){
        this.container = document.querySelector('#box-container')
        this._fillCatalog()
        this._render()
    },
    _fillCatalog(){
        this.items = getArrOfObj()
    },
    _render(){
        let htmlStr = ''
        this.items.forEach(item => {
            return htmlStr+= `<div class="box">
                                <a href="#" class="fas fa-heart"></a>
                                <a href="#" class="fas fa-eye"></a>
                                <img src="${item.img}" alt="">
                                <h3>tasty food</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                                <span>$15.99</span>
                                <a href="#" class="btn">add to cart</a>
                            </div>`
        })

        this.container.innerHTML = htmlStr
    }
}

products.init()