var myModule = require("./my-module.js")

var greeting1 = myModule(0, 'World');
var greeting2 = myModule(0, 'Bob');
var bye1 = myModule(1, 'World');
var bye2 = myModule(1, 'Bob');

greeting1();
greeting2();

bye1(function (msg) {
    console.log(msg);
});
bye2(function(msg) {
    console.log(msg);
});