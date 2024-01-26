let qty = document.querySelectorAll('.qtys')
let mins = document.querySelectorAll('.mins')
let plus = document.querySelectorAll('.plus')
let qty1 = document.getElementById('qty1')




plus.forEach((element, i) => {
    element.addEventListener("click", function () {
        qty[i].innerHTML = Number(qty[i].innerHTML) + 1
    })
});
mins.forEach((element, i) => {
    element.addEventListener("click", function () {
        if (Number(qty[i].innerHTML) === 1) {
            return
        } else {

            qty[i].innerHTML = Number(qty[i].innerHTML) - 1
        }
    })
});