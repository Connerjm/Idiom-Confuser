var firstHalfs = ["Even a broken clock", "A watched pot", "A bird in the hand", "A penny saved"];
var secondHalfs = ["is right twice a day.", "never boils.", "is worth two in the bush.", "is a penny earned."];

function newIdiom()
{
    var x = Math.floor(Math.random() * firstHalfs.length);
    var y = Math.floor(Math.random() * secondHalfs.length);
    return "\"" + firstHalfs[x] + " " + secondHalfs[y] + "\"";
}

$("#confusebutton").on("click", function()
{
    $("#idiomtext").text(newIdiom());
});