var btn2 = 12;
var countElement = document.querySelector("#btn2")

console.log(countElement);

function add1() {
    btn2++;
    countElement.innerText = btn2 +"like(s)";
    console.log(btn2);
}
