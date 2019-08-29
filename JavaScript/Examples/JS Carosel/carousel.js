let img = document.querySelectorAll("img");
let leftArr = document.querySelector(".left");
let rightArr = document.querySelector(".right");

let counter = 0;
leftArr.addEventListener("click", moveLeft);
rightArr.addEventListener("click", moveRight);

function moveLeft() {
    counter--;
    if (counter == img.length) {
        counter = -1;
    }
}

function moveRight() {
    counter++;
    if (counter == img.length) {
        counter = 0;
    }
}





// let pics = [
//     "img/img1.jpg",
//     "img/img2.jpg",
//     "img/img3.jpg",
//     "img/img4.jpg",
//     "img/img5.jpg",
//     "img/img6.jpg"
// ];

// let back = document.getElementById("back");
// let next = document.getElementById("next");

// back.addEventListener("click", changeImg);
// next.addEventListener("click", changeImg);

// function changeImg() {
//     for (let i = 0; i < pics.length; i++) {
//         pics[i].style.display = "";
//     }
// }

// let pics = document.getElementsByClassName("img");

//display = none

// pics[i].addEventListener("click", function () {
//     remove();
//     section[i].className = "active";
//     li[i].className = "selected";
// });