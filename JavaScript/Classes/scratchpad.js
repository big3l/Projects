//inspect element on firefox, instead of viewing console you can edit and save code in scratchpad.

let book = {
    name : "Javascript the good part",
    author: "John",
    year: 2016,
    
    bookInfo: function (){
        return "the book name is " + this.name + ", the author is " + this.author + ", the year is " + this.year;}
    
};
console.log (book.bookInfo());
