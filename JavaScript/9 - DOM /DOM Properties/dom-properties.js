///////////////////////////////////////////////////////////////
//Dom Properties

let tag = document.getElementById("firstItem").style.color = "red"; //selector with id name

let liTags = document.getElementsByClassName("light"); //selector with class name

liTags[0].innerHTML = "List Item 2 after editing!!"; // the innerHTML of the html tag

console.log(liTags[1].innerHTML);

liTags[1].style.color = "purple"; //change the color of list item 3

let headingTag = document.getElementsByTagName("h1"); //selector with tag name

console.log(headingTag);

headingTag[0].innerHTML = "change the tag";
headingTag[1].style.background = "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 52%, rgba(252,176,69,1) 100%)";
headingTag[1].style.color = "white";
headingTag[1].setAttribute("class","responsive"); //to add class="Responsive"