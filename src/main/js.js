
const content = document.querySelector(".product-list");

const menu = [
{
    name:"모듬회",
    price:"100,000",
    img:"img/menu/sashimi.jpg"
},
{
    name:"초밥",
    price:"15,000",
    img:"img/menu/sushi2.jpg"

},
{
    name:"해물모듬",
    price:"50,000",
    img:"img/menu/seafood.jpg"
},
{
    name:"매운탕",
    price:"20,000",
    img:"img/menu/fishsoup2.jpg"
},
{
    name:"생선구이",
    price:"15,000",
    img:"img/menu/fish.jpg"
},
{
    name:"모듬튀김",
    price:"10,000",
    img:"img/menu/fry.jpg"
},
{
    name:"소주",
    price:"4,000",
    img:"img/menu/soju.jpg"
},
{
    name:"맥주",
    price:"4,000",
    img:"img/menu/beer.jpg"
}]

const contentBox = "";
for(let i = 0; i < menu.length; i++){
    let SHOWMENU = menu[i]
   
    const contentHtml = `
        <div class="product-card">
            <img class= "product-img" src=${SHOWMENU.img} alt="">
            <div class="product-content">
                <p class = "product-name">${SHOWMENU.name}</p>
                <p class= "product-price">${SHOWMENU.price + "원"}</p>
            </div>
        </div>
        `
    contentBox = contentBox + contentHtml
    
    content.innerHTML = contentBox
}
