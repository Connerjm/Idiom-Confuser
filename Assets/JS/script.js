//Variables

var firstHalfs = ["Even a broken clock", "A watched pot", "A bird in the hand", "A penny saved"];
var secondHalfs = ["is right twice a day.", "never boils.", "is worth two in the bush.", "is a penny earned."];
var fakeAuthors = ["Plato", "Socrates", "Aristotle", "Obama", "Some Old Dude", "That One Guy", "Galileo", "Issac Newton", "Einstein", "That Teacher that was always rude for no reason"];
var after = [" or something.", " propbably.", " or whatever.", "???", " I think."];

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
    var x = Math.floor(Math.random() * fakeAuthors.length);
    var y = Math.floor(Math.random() * after.length);
    return fakeAuthors[x] + after[y];
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