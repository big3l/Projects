


let myDiv= document.getElementById("bannerMsg");
let btn = document.querySelector("button");
let btn2 = document.querySelectorAll("button")[1];

btn.addEventListener("click", function(){
    //this will replace with the new one and keep the old one
    myDiv.classList.add("bannerClass");
    btn.classList.add("btnClass");

    //this will totally delete the old class and replace with the new one
    // myDiv.setAttribute("class", "bannerClass"); 
    // myDiv.setAttribute("class","btnClass")
});

btn2.addEventListener("click", function(){
    myDiv.classList.remove("bannerClass");
    btn.classList.remove("btnClass");
})