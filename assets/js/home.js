let list = document.getElementById("list")
let db
/////////// cartlari cagirmaq
function getProducts() {
    list.innerHTML = ''
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart`)
        .then(res => {
            db = res.data
            db.forEach(item => {
                let cartBox = document.createElement("div")
                cartBox.className = 'cart'
                cartBox.innerHTML = `


            <div class="imgDiv">
            <img src=${item.url} alt="">
            </div>
             <div class="textDiv">
            <h4>${item.name}</h4>
            <p>${item.price}</p>
            <button onclick="ad(${item.id})">Ad Basket</button> <button onclick="adWish(${item.id})">Ad Wish</button>
            </div>
            
            `
                list.appendChild(cartBox)
            });
        })
}

window.onload = () => {
    getProducts()
}

////////////////////////

//////////////// wish liste elave edmek
function adWish(id) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let productItem = wishlist.find(item => item.id == id)

    if (productItem) {
        alert('Aye var!')
    } else {
        wishlist.push(db.find((item) => item.id == id));
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }

}
///////////////////////////////


function ad(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let productItem = cart.find(item => item.id == id)
    if(productItem) {
        productItem.count = (productItem.count || 1) + 1
    } else {
        cart.push(db.find((item) => item.id == id));
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}