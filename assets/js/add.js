// formu idlere gore tanitmaq
let form = document.getElementById("form")
let Name = document.getElementById("name")
let Price = document.getElementById("price")
// formu idlere gore tanitmaq //

// form gonder post funksiyasi

async function getPost(e) {
    e.preventDefault()
    let data = {
        name: Name.value,
        price: Price.value,
    }
    await axios.post(`https://6569b50bde53105b0dd78115.mockapi.io/adCart/`, data)
    getProducts()
    form.reset()
}

form.addEventListener("submit", getPost)
// form gonder post funksiyasi ///

// table  append edmek productslari cagirmaq
let table = document.getElementById("list")

function getProducts() {
    table.innerHTML = ''
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart`)
        .then(res => {
            let db = res.data
            db.forEach(item => {
                let cartBox = document.createElement("tr")
                cartBox.innerHTML = `
                <td><img src=${item.url} alt=""></td>
                <td> ${item.name}</td>
                <td>price ${item.price}</td>
                <td><button onclick="sil(${item.id})">sil</button></td>

            `
                table.appendChild(cartBox)
            });
        })
}

window.onload = () => {
    getProducts()
}
////////////////  productslari silme
async function sil(id) {
    await axios.delete(`https://6569b50bde53105b0dd78115.mockapi.io/adCart/${id}`)
    getProducts()
}

//////////// sort A dan Z ye 

function getSort() {
    table.innerHTML = ''
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart`)
        .then(res => {
            let db = res.data
            let sortedData = db.sort((a, b) => a.name.localeCompare(b.name))
            sortedData.forEach(item => {
                let cartBox = document.createElement("tr")
                cartBox.innerHTML = `
                <td><img src=${item.url} alt=""></td>
                <td> ${item.name}</td>
                <td>price ${item.price}</td>
                <td><button onclick="sil(${item.id})">sil</button></td>

            `
                table.appendChild(cartBox)
            });
        })
}

document.getElementById("btnA").addEventListener("click", getSort)
////////////////////////// Z den A ya


function getSortt() {
    table.innerHTML = ''
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart`)
        .then(res => {
            let db = res.data
            let sortedData = db.sort((a, b) => b.name.localeCompare(a.name))
            sortedData.forEach(item => {
                let cartBox = document.createElement("tr")
                cartBox.innerHTML = `
                <td><img src=${item.url} alt=""></td>
                <td> ${item.name}</td>
                <td>price ${item.price}</td>
                <td><button onclick="sil(${item.id})">sil</button></td>

            `
                table.appendChild(cartBox)
            });
        })
}

document.getElementById("btnZ").addEventListener("click", getSortt)
//////////////// default
document.getElementById("btnD").addEventListener("click", getProducts)

/////// search By Name 

let inp = document.getElementById("inp")

function getName() {
    table.innerHTML = ''
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart?name=${inp.value}`)
        .then(res => {
            let db = res.data
            db.forEach(item => {
                let cartBox = document.createElement("tr")
                cartBox.innerHTML = `
                <td><img src=${item.url} alt=""></td>
                <td> ${item.name}</td>
                <td>price ${item.price}</td>
                <td><button onclick="sil(${item.id})">sil</button></td>

            `
                table.appendChild(cartBox)
            });
        })
}

document.getElementById("axtar").addEventListener("click",getName)














