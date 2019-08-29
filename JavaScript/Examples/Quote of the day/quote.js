
let quotes = [ //14 quotes
    "“Better to remain silent and be thought a fool than to speak out and remove all doubt.” – Abraham Lincoln",
    "“If I were two-faced, would I be wearing this one?” – Abraham Lincoln",
    "“The best thing about the future is that it comes one day at a time.” – Abraham Lincoln",
    "“The only mystery in life is why the kamikaze pilots wore helmets.” – Al McGuire",
    "“Light travels faster than sound. This is why some people appear bright until you hear them speak.” – Alan Dundes",
    "“Nobody realizes that some people expend tremendous energy merely to be normal.” – Albert Camus",
    "“Men marry women with the hope they will never change. Women marry men with the hope they will change. Invariably they are both disappointed.” – Albert Einstein",
    "“The difference between stupidity and genius is that genius has its limits.” – Albert Einstein",
    "“All the things I really like to do are either immoral, illegal or fattening.” – Alexander Woollcott",
    "“War is Gods way of teaching Americans geography.” – Ambrose Bierce",
    "“It would be nice to spend billions on schools and roads, but right now that money is desperately needed for political ads.” – Andy Borowitz",
    "“The average dog is a nicer person than the average person.” – Andy Rooney",
    "“At every party there are two kinds of people – those who want to go home and those who dont. The trouble is, they are usually married to each other.” – Ann Landers",
    "“If you want your children to listen, try talking softly to someone else.” – Ann Landers"
];

let btn = document.getElementById("submit");
btn.addEventListener("click", newQuote);

function newQuote() { 
    for (i = 0; i < quotes.length; i++) {
        let random = Math.floor(Math.random() * quotes.length);
        document.getElementById("quote").innerHTML = quotes[random];
    };
}


