let qty = document.querySelectorAll('.qtys')
let mins = document.querySelectorAll('.mins')
let plus = document.querySelectorAll('.plus')

let price = document.querySelectorAll(".price")
let total_p = document.getElementById('total-p')
let remove = document.querySelectorAll(".remove")
let like = document.querySelectorAll(".bi-heart")
console.log(like)

// function that calculate the total price of all products
function calcTotal() {
    let qty = document.querySelectorAll('.qtys')
    let price = document.querySelectorAll(".price")
    var total = 0
    price.forEach(function (price, i) {
        total += Number(price.innerHTML) * Number(qty[i].innerHTML)
    })
    total_p.innerHTML = total
}

//Add the total price for the first time the cart was call it 
calcTotal()


//Increment the quentity of each item
plus.forEach((element, i) => {
    element.addEventListener("click", function () {
        qty[i].innerHTML = Number(qty[i].innerHTML) + 1;
        calcTotal()
    })
});

//Decrement the quentity of each item
mins.forEach((element, i) => {
    element.addEventListener("click", function () {
        if (Number(qty[i].innerHTML) === 1) {
            return
        } else {

            qty[i].innerHTML = Number(qty[i].innerHTML) - 1
            calcTotal()
        }
    })
});

// Remove item from the Cart
remove.forEach(function (btn) {
    btn.addEventListener("click", function () {
        btn.parentElement.parentElement.remove()
        calcTotal()
    })
})

//Like item by clicking on the heart button

like.forEach(function (btn_like) {
    var colorH = false
    btn_like.addEventListener('click', function () {

        if (!colorH) {
            colorH = true
            btn_like.style.color = "red"
        } else {
            btn_like.removeAttribute("style")
            colorH = false
        }

    })
})