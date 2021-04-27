const fs = require("fs");

console.log("Start");

// async function 
fs.readFile("./f1.txt" , giveMeData );


// sync function
function giveMeData(error,data){ 
    console.log("I am inside a callback function !!!!");
    console.log(data+"");
}

console.log("I am taking selfies");
console.log("I am talking to my friends !!");
console.log("End");
// millions of lines sync

