const check = document.querySelector(".checkbox");

check.addEventListener("click", e => {
  if (e.target.classList.contains("checked")) {
    e.target.classList.remove("checked");
    } else {
    e.target.classList.add("checked");
    }
});
//# sourceURL=pen.js
    