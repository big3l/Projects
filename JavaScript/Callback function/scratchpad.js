 /////////////////////////////////////////////////////////////////////////


function doSomething(callback) {
    callback();
}
function sayHi() {
    alert("Good Morning!");
}
doSomething(sayHi);


/////////////////////////////////////////////////////////////////////////


function doHomework(subject,callback) {
    console.log("Starting my " + subject);
    callback();
}

function dowork(){
    console.log("Finishing my Homework");
}

doHomework("Sleeping", dowork);


/////////////////////////////////////////////////////////////////////////


function serverRequest(query,callback) {
    setTimeout(function () {
        var response = query + "20 is available";
        callback(response);
    }, 2000);
}

function getResult(result) {
    console.log("the response from the server: " + result);
}
serverRequest("available cars in Hamburg", getResult);




/////////////////////////////////////////////////////////////////////////

/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
































/*
Exception: ReferenceError: setTimout is not defined
serverRequest@Scratchpad/3:29:5
@Scratchpad/3:38:1
*/