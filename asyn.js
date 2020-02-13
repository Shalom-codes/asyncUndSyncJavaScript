const fs = require("fs");
console.log("first");
fs.readFile('main.txt', function(err, data){
    if(err){
        return console.error(err);
    }
});
console.log("third");