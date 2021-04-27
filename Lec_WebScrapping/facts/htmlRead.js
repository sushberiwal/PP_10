const fs = require("fs");
const cheerio = require("cheerio");

let htmlKaData = fs.readFileSync("./index.html");

let ch = cheerio.load(htmlKaData);

// <h1>Heading 1</h1> => object form !!
let liKaObject = ch("li");
console.log(liKaObject);

// let h1KaData = ch("h1").`text();
// console.log(h1KaData);`




