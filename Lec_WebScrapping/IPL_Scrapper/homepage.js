const request = require("request");
const cheerio = require("cheerio");
const getAllMatches = require("./allMatches");


// homepage ka html fetch 
request( "https://www.espncricinfo.com/series/ipl-2020-21-1210595"  , function(error , response , data){
    processData(data);
});



function processData(html){
    let ch = cheerio.load(html);
    let aTag = ch(".widget-items.cta-link a");
    let allMatchesLink = "https://www.espncricinfo.com"+aTag.attr("href");
    getAllMatches(allMatchesLink);
}

