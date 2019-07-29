

let images = [];
let time = 1500;
let i = 0;

images[0] = "https://picsum.photos/id/160/400/400";
images[1] = "https://picsum.photos/id/170/400/400";
images[2] = "https://picsum.photos/id/180/400/400";
images[3] = "https://picsum.photos/id/190/400/400";
images[4] = "https://picsum.photos/id/200/400/400";

function changeImg() {
    document.querySelector("img").src = images[i];
    i++;
    if (i == images.length) {
    }
}
setInterval(changeImg, time);