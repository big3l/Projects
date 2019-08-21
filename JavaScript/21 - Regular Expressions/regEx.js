//////////////////////////////////////////////////////////////////////////////////////
//Regular Expressions

//[a-z] = \w
//[0-9] = \d

var string = "Visit W3SCHOOLS W3Schools w3schoolssssssssssssss ";
var pattern = /w3schools/i;
var result = string.match(pattern);

console.log(result);
//Returns Array [ "W3SCHOOLS" ]

//////////////////////////////////////////////////////////////////////////////////////


var str = "oooKKKKKiii Visit W3SCHOOLS W3Schools w3schoolssssssssssssss ";
var patt = /[iok]+/i;
var res = str.match(patt);

console.log(res);
//Returns Array [ "oooKKKKKiii" ]

//////////////////////////////////////////////////////////////////////////////////////


var s = "oooKKKKKiii Visit W3SCHOOLS W3Schools w3schoolssssssssssssss ";
var p = /[^kkk]+[io]+/i;
var r = s.match(p);

console.log(r);
//Returns Array [ "ooo" ]

//////////////////////////////////////////////////////////////////////////////////////


var st = "oooKKKKKiii Visit W3SCHOOLS 2010070090$ W3Schools w3schoolssssssssssssss ";
var pa = /[0-9]+\$/i;
var re = st.match(pa);

console.log(re);
//Returns Array [ "2010070090$" ]

//////////////////////////////////////////////////////////////////////////////////////


var stri = "oooKKKKKiii Visit W3SCHOOLS 2010070090$ W3Schools w3schoolssssssssssssss ";
var patte = /\d+\$/i;
var resu = stri.match(patte);

console.log(resu);
//Returns Array [ "2010070090$" ]

//////////////////////////////////////////////////////////////////////////////////////

var strin = "oooKKKKKiii Visit W3SCHOOLS 2010070090$ 4632143214€ W3Schools w3schoolssssssssssssss ";
var patter = /\d+(\$|\€)/i;
var resul = strin.match(patter);

console.log(resul);
//Returns Array [ "2010070090$", "$" ]


//////////////////////////////////////////////////////////////////////////////////////






/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */



























/*
Exception: SyntaxError: unexpected token: identifier
@Scratchpad/5:35
*/