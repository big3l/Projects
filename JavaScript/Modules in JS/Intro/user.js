// Dont have to link this file in html.
// I can select what I want to import to html file.
// Must use type module in html src link - <script type="module" src="main.js"></script>
// when using export default, you dont need to use {curly brackets} in import main.js
// you can add export before and after declaration
// you can export multiple declarations

let greeting = "Welcome back";

function hi(user) {
    return `${greeting} ${user}, I imported and exported stuff`
    // return("Hello World " + user);
};

export default function doubleNumber(num) {
    return num * 2;
};

export { greeting, hi, makeElement };


function makeElement(element, text, background) {
    let el = document.createElement(element);
    el.append(text);
    el.style.background = background;
    document.body.append(el);
}

