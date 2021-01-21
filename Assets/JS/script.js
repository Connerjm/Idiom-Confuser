//Variables

var firstHalfs = ["Even a broken clock", "A watched pot", "A bird in the hand", "A penny saved", "An apple a day"];
var secondHalfs = ["is right twice a day.", "never boils.", "is worth two in the bush.", "is a penny earned.", "keeps the doctor away."];
var fakeAuthors = ["Plato", "Socrates", "Aristotle", "Obama", "Some Old Dude", "That One Guy", "Galileo", "Issac Newton", "Einstein", "That Teacher that was always rude for no reason", "John 3:16", "A legitimate therapist"];
var after = [" or something.", " probably.", " or whatever.", "???", " I think.", " I swear.", " according to FOX news.", " circa 2021"];

//Functions

function newIdiom()//Grabs an entry from both of the arrays and creates a new messed up idiom.
{
    var x = Math.floor(Math.random() * firstHalfs.length);
    var y = Math.floor(Math.random() * secondHalfs.length);
    if (x === y)
        return newIdiom();
    else
        return "\"" + firstHalfs[x] + " " + secondHalfs[y] + "\"";
}

function newauthor()//Grabs an entry from both of the arrays to add a fake author of the quote.
{
    var a = Math.floor(Math.random() * fakeAuthors.length);
    var b = Math.floor(Math.random() * after.length);
    return fakeAuthors[a] + after[b];
}

//Attaching listeners.

$("#confusebutton").on("click", function()//When the button is clicked, sets the HTML elements to a created idiom and author.
{
    var idiom = $("#idiomtext");
    var author = $("#idiomauthor");
    idiom.text(newIdiom());
    author.text(newauthor());
    if (author.css("display") === "none")
        author.css("display", "block");
});