var fortunes = [
    "Your persistance pays off",
    "You fear what you do not know",
    "You will have a pleasent surprise",
    "Just keep it simple"
];


exports.getFortune = function () {
    var num = Math.floor(Math.random()*fortunes.length)
    return fortunes[num];
}; 
