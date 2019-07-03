let img = document.getElementById("myImg");
let btn = document.getElementById("myBtn");

function changeImg() {
    if (img.getAttribute("src") == "https://picsum.photos/id/199/400/400") {
        img.setAttribute("src", "https://picsum.photos/id/112/400/400");
    }
    else {
        img.setAttribute("src", "https://picsum.photos/id/199/400/400");
    }
}
btn.addEventListener("click", changeImg);