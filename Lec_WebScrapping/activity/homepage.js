// npm install request
// async function callback pass hoga

const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");
// async
// request("https://www.espncricinfo.com/series/ipl-2020-21-1210595" , getData );

// function getData(error , response , body){
    // fs.writeFileSync("./homepage.html" , body);
// }

let homepage = fs.readFileSync("./homepage.html");

let ch = cheerio.load(homepage);

let aTag = ch(".widget-items.cta-link a");
let allMatchesLink = "https://www.espncricinfo.com"+aTag['0'].attribs.href;
console.log(allMatchesLink);

