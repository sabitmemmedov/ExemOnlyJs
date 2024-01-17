let table = document.getElementById("list")

///////////// baskete productlari cagirmaq
function getCart() {
    table.innerHTML = ""
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.forEach((item, id) => {
        let cartBox = document.createElement("tr")
        cartBox.innerHTML = `
                <td><img src=${item.url} alt=""></td>
                <td> ${item.name}</td>
                <td>price ${item.price}</td>
                <td>count ${item.count}</td>
                <td><button onclick="sil(${id})">sil</button></td>

            `
        table.appendChild(cartBox)
    });
}

window.onload = () => {
    getCart()
}


///////////// localdan sil


function sil(id){
    let cart  = JSON.parse(localStorage.getItem("cart"))|| []
    cart.splice(id,1)
    localStorage.setItem("cart",JSON.stringify(cart))
    getCart()
}