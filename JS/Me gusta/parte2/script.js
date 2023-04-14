var btn = [9, 12, 9];
span = [
        document.querySelector("#post-1"),
        document.querySelector("#post-2"),
        document.querySelector("#post-3")
]

function like(id) {
    btn[id]++;
    span[id].innerHTML = btn[id] + "likes";
}