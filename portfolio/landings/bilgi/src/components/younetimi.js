const names = ['Döküman Analizi', 'Kabul ve Değerlendirme', 'İş Kurallarl Analizi', 'Aklş Diyagramlarl', 'Paydaş Analizi','Prototipleme']
const desk = ['Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.']
const imgs = '/landings/bilgi/src/assets/imgs/product'

function getArrOfObj(){
    let local = []
    for(let i = 0; i < names.length; i++){
        local.push({
            name: names[i],
            desk: desk,
            img: `${imgs + (i+1)}.png`
        })
    }
    
    return local
}

const products = {
    container: null,
    items: [],
    init(){
        this.container = document.querySelector('#productContainer')
        this._fillCatalog()
        this._render()
    },
    _fillCatalog(){
        this.items = getArrOfObj()
    },
    _render(){
        let htmlStr = ''
        this.items.forEach(item=>{
            return htmlStr += `
                <div class="item" id="animatedItems">
                    <img src="${item.img}" alt="">
                    <div class="heading"><h6>${item.name}</h6></div>
                    <div class="info"><h6>${item.desk}</h6></div>
                </div>
            `
        })
        this.container.innerHTML = htmlStr
    }
}

products.init()