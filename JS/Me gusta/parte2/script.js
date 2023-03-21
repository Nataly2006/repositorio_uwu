var btnlike = 3;
var countElement = document.querySelector("#btnlike")

console.log(countElement);

function add1() {
    btnlike++;
    countElement.innerText = btnlike +"like(s)";
    console.log(btnlike);
}