//////////////////////////////////////////////////////////
//Attributes

let link = document.querySelector("a"); // will get the first "a" link

//change the link to bing from google
link.setAttribute("href", "www.bing.com"); //is now <a href="www.bing.com">
console.log(link.getAttribute("href")); //Prints: www.bing.com
link.textContent = ("www.bing.com"); //changed link to show www.bing.com

//change img from node.png to angular.png
let pic = document.querySelector("img");
pic.setAttribute("src", "img/angular.png");




