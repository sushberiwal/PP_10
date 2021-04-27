const fs = require("fs");
const cheerio = require("cheerio");

let htmlKaData = fs.readFileSync("./index.html");

let ch = cheerio.load(htmlKaData);

let h1KaData = ch("h1");
// console.log(h1KaData);

// get p tag

let pTags = ch("p").text();
// console.log(pTags);

// {
//    "0": {} ,
//     "1" :{} ,
//     "2":{}.text() => text is not a function !
// }.text() => works fine !!!

let lastPTag = ch(pTags["2"]).text();
// console.log(lastPTag);

// how to find a particular element in the html ?????

// i want to find the content of p tag which is inside li !!!
// let pInsideUl = ch("ul p").text();
// console.log(pInsideLi);

// > direct childrens
let pInsideLi = ch("ul>p").text();
console.log(pInsideLi);

// classes => multiple elements pe same classes => to style same set of elements 
// ids => unique on the page !!!

// select elements on the basis of class
// use dot in case of class
// let pTags = ch("p").length; => to find length of the cheerio object

let allPTags = ch(".text.main").text();
console.log("####################");
console.log(allPTags);


// ids => #

console.log(ch("#unique").text());



