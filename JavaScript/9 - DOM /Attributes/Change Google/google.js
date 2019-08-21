//changing google image and and links at google.com

//insepct the google image and find its ID (hplogo)

document.getElementById("hplogo");

// This is the image id shown in the inspector
// img id = "hplogo" alt = "Google" src = "/images/branding/googlel…logo_color_272x92dp.png" 
// srcset = "/images/branding/googlel…o_color_272x92dp.png 2x" style = "padding-top:109px" 
// onload = "typeof google==='object'…e.aft&&google.aft(this)" data - atf="1" data - iml="1561965270486" 
// width = "272" height = "92" >

let logo = document.getElementById("hplogo");

//   logo is now:
//   < img id = "hplogo" alt = "Google" src = "/images/branding/googlel…logo_color_272x92dp.png" srcset = "/images/branding/googlel…o_color_272x92dp.png 2x" style = "padding-top:109px" onload = "typeof google==='object'…e.aft&&google.aft(this)" data - atf="1" data - iml="1561965270486" width = "272" height = "92" >

logo.getAttribute("src");
// this is the source of the google image: "/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"

//Changing the image source:
logo.setAttribute("src", "https://picsum.photos/id/193/300/300");
logo.setAttribute("srcset", "https://picsum.photos/id/193/300/300");
logo.setAttribute("srcset", "https://picsum.photos/id/155/400/400");
//changine the image size:

logo.style.width = "400px";
logo.style.height = "400px";
logo.style.width = "600px";

//finding all the links on the page
document.getElementsByTagName("a");
// shows: 'HTMLCollection { 0: a, 1: a, 2: a.gb_d, 3: a.gb_d, 4: a.gb_x.gb_dc, 5: a#gb192.gb_c, 6: a#gb8.gb_c, 7: a#gb36.gb_c, 8: a#gb78.gb_c, 9: a#gb1.gb_c, … }

let links = document.getElementsByTagName("a");

//for loop to show all of the link tag names:
for (let i = 0; i < links.length; i++) {
    console.log(links[i].textContent);
}
// These are all the links on the google homepage:

// About debugger eval code: 2: 9
// Store debugger eval code: 2: 9
// Gmail debugger eval code: 2: 9
// Images debugger eval code: 2: 9
// debugger eval code: 2: 9
// Account debugger eval code: 2: 9
// Maps debugger eval code: 2: 9
// YouTube debugger eval code: 2: 9
// Play debugger eval code: 2: 9
// Search debugger eval code: 2: 9
// Gmail debugger eval code: 2: 9
// Contacts debugger eval code: 2: 9
// Drive debugger eval code: 2: 9
// Calendar debugger eval code: 2: 9
// Translate debugger eval code: 2: 9
// Photos debugger eval code: 2: 9
// Add a shortcut debugger eval code: 2: 9
// More debugger eval code: 2: 9
// Shopping debugger eval code: 2: 9
// Docs debugger eval code: 2: 9
// Books debugger eval code: 2: 9
// Blogger debugger eval code: 2: 9
// Hangouts debugger eval code: 2: 9
// Keep debugger eval code: 2: 9
// Classroom debugger eval code: 2: 9
// Duo debugger eval code: 2: 9
// Jamboard debugger eval code: 2: 9
// Collections debugger eval code: 2: 9
// Even more from Google debugger eval code: 2: 9
// debugger eval code: 2: 9
// Change debugger eval code: 2: 9
// Privacy debugger eval code: 2: 9
// Google Account debugger eval code: 2: 9
// Dan Lewisdan.lewis1803@gmail.com(default ) debugger eval code: 2: 9
// All your Brand Accounts » debugger eval code: 2: 9
// Add account debugger eval code: 2: 9
// Sign out debugger eval code: 2: 9
// Learn more debugger eval code: 2: 9
// Report inappropriate predictions debugger eval code: 2: 9
// Deutsch debugger eval code: 2: 9
// Privacy debugger eval code: 2: 9
// Terms debugger eval code: 2: 9
// Settings debugger eval code: 2: 9
// Search settings debugger eval code: 2: 9
// Advanced search debugger eval code: 2: 9
// Your data in Search debugger eval code: 2: 9
// History debugger eval code: 2: 9
// Search Help debugger eval code: 2: 9
// Send feedback debugger eval code: 2: 9
// Advertising debugger eval code: 2: 9
// Business debugger eval code: 2: 9
// How Search works debugger eval code: 2: 9



links[0]
// this calls for the 1st link on the page - link number 0 in array is "about"
// about link: <a href="/intl/en/about/?fg=1&utm…&utm_campaign=hp-header" onmousedown="return rwt(this,'','',''…gQkNQCCAM','','',event)">

links[0].textContent;
// "About"
links[0].getAttribute("href");
// this is the href link: "/intl/en/about/?fg=1&utm_source=google-DE&utm_medium=referral&utm_campaign=hp-header"

//for loop to show the list of hrefs:
for (let i = 0; i < links.length; i++) {
    console.log(links[i].getAttribute("href"));
}

//{/* /intl/en/about/?fg=1&utm_source=google-DE&utm_medium=referral&utm_campaign=hp-header debugger eval code:2:9
https://store.google.com/?utm_source=hp_header&utm_medium=google_oo&utm_campaign=GS100042 debugger eval code:2:9
https://mail.google.com/mail/?tab=wm&ogbl debugger eval code:2:9
https://www.google.de/imghp?hl=en&tab=wi&ogbl debugger eval code:2:9
https://www.google.de/intl/en/about/products?tab=wh debugger eval code:2:9
https://myaccount.google.com/?utm_source=OGB&tab=wk&utm_medium=app debugger eval code:2:9
https://maps.google.de/maps?hl=en&tab=wl debugger eval code:2:9
https://www.youtube.com/?gl=DE&tab=w1 debugger eval code:2:9
https://play.google.com/?hl=en&tab=w8 debugger eval code:2:9
https://www.google.de/webhp?tab=ww debugger eval code:2:9
https://mail.google.com/mail/?tab=wm debugger eval code:2:9
https://contacts.google.com/?hl=en&tab=wC debugger eval code:2:9
https://drive.google.com/?tab=wo&authuser=0 debugger eval code:2:9
https://www.google.com/calendar?tab=wc debugger eval code:2:9
https://translate.google.de/?hl=en&tab=wT debugger eval code:2:9
https://photos.google.com/?tab=wq&pageId=none debugger eval code:2:9
//# debugger eval code:2:9
https://www.google.de/intl/en/about/products?tab=wh debugger eval code:2:9
https://www.google.de/shopping?hl=en&source=og&tab=wf debugger eval code:2:9
https://docs.google.com/document/?usp=docs_alc&authuser=0 debugger eval code:2:9
https://books.google.de/bkshp?hl=en&tab=wp debugger eval code:2:9
https://www.blogger.com/?tab=wj debugger eval code:2:9
https://hangouts.google.com/ debugger eval code:2:9
https://keep.google.com/u/0 debugger eval code:2:9
https://classroom.google.com/?authuser=0 debugger eval code:2:9
https://duo.google.com/?usp=duo_ald debugger eval code:2:9
https://jamboard.google.com/?authuser=0&usp=jam_ald debugger eval code:2:9
https://www.google.de/save debugger eval code:2:9
https://www.google.de/intl/en/about/products?tab=wh debugger eval code:2:9
https://accounts.google.com/SignOutOptions?hl=en&continue=https://www.google.com/ debugger eval code:2:9
https://myaccount.google.com/?utm_source=OGB&tab=wk debugger eval code:2:9
https://myaccount.google.com/privacypolicy debugger eval code:2:9
https://myaccount.google.com/?utm_source=OGB&tab=wk&utm_medium=act debugger eval code:2:9
https://www.google.com/webhp?authuser=0 debugger eval code:2:9
https://myaccount.google.com/brandaccounts?authuser=0&continue=https://www.google.com/&service=https://www.google.com/webhp%3Fauthuser%3D%24authuser debugger eval code:2:9
https://accounts.google.com/AddSession?hl=en&continue=https://www.google.com/ debugger eval code:2:9
https://accounts.google.com/Logout?hl=en&continue=https://www.google.com/&timeStmp=1561965270&secTok=.AG5fkS-oXSrLh0Vcs56-aZOvHZe1vH82XQ debugger eval code:2:9
https://support.google.com/websearch/answer/106230?hl=en-DE debugger eval code:2:9
//# debugger eval code:2:9
https://www.google.com/setprefs?sig=0_YokYyPPC1dvYM9bMnAqJ8qbtJAU%3D&hl=de&source=homepage&sa=X&ved=0ahUKEwizjM2IlpPjAhUoxYUKHUoDBQgQ2ZgBCAs debugger eval code:2:9
https://www.google.com/intl/en_de/policies/privacy/?fg=1 debugger eval code:2:9
https://www.google.com/intl/en_de/policies/terms/?fg=1 debugger eval code:2:9
https://www.google.com/preferences?hl=en debugger eval code:2:9
https://www.google.com/preferences?hl=en-DE&fg=1 debugger eval code:2:9
///advanced_search?hl=en-DE&fg=1 debugger eval code:2:9
//myactivity.google.com/privacyadvisor/search?utm_source=googlemenu&fg=1 debugger eval code:2:9
//myactivity.google.com/product/search?utm_source=google&hl=en-DE&fg=1 debugger eval code:2:9
//support.google.com/websearch/?p=ws_results_help&hl=en-DE&fg=1 debugger eval code:2:9
//# debugger eval code:2:9
https://www.google.com/intl/en_de/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1 debugger eval code:2:9
https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1 debugger eval code:2:9
//google.com/search/howsearchworks/?fg=1 */}


//setting the "about" link to bing.com with for loop:

for (let i = 0; i < links.length; i++) {
    links[i].setAttribute("href", "http://www.bing.com");
}

//changing the background color of links to pink with for loop:
for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "pink";
}

//change font size of the links:
for (let i = 0; i < links.length; i++) {
    links[i].style.fontSize = "40px";
}

//change text to capital letters:

for (let i = 0; i < links.length; i++) {
    links[i].style.textTransform = "uppercase";
}









