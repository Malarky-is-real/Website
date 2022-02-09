// JavaScript source code
//Variable
var price = 1309.99;
var saved = localStorage.getItem('saved');
var half = price/2
var math = price - saved + 10;
remaining = Math.round(math * 1000) / 1000
let change = document.getElementById("change");
let saved2 = document.getElementById("saved");
var $ = "$";

if (half == saved) {
    document.getElementById("half").innerHTML = ("at half");

}
else if (saved > remaining) {
    document.getElementById("half").innerHTML = ("Getting closer")
}

else if (price - saved <= 200) {
    document.getElementById("half").innerHTML = ("Final Stretch")
}


//Functions 
console.log(saved)

function setAmount() {
    let pricechange = prompt("Please enter new amount saved.");
    localStorage.setItem('saved',  pricechange)
    saved2.textContent = pricechange;
    location.reload();
}
console.log(saved2)
if (!localStorage.getItem("saved")) { setAmount(); }
else { let nsaved = localStorage.getItem('saved'); }

change.onclick = function () {
    setAmount();
}

document.getElementById("price").innerHTML = $ + price;
document.getElementById("saved").innerHTML = $ + saved;
document.getElementById("remain").innerHTML = $ + remaining;