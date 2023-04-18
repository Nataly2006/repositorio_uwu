function hide(button) {
    button.remove();
}
var sum = 500;
var countElement = document.querySelector("#sum")

console.log(countElement);

function add1() {
    btnlike++;
    countElement.innerText = btnlike +"like(s)";
    console.log(btnlike);
}