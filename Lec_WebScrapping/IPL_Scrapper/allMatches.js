const request = require("request");
const cheerio = require("cheerio");
const getMatchDetails = require("./match");

function getAllMatches(link){
    request(link , function(error , response , data){
        processData(data);  
    })
}


function processData(html){
    // get liks of all the matchess !!!
    let ch = cheerio.load(html);
    let allATags = ch('a[data-hover="Scorecard"]');
    // { {} , {} , {} , {} , {} , {} , {} , {} }
    for(let i=0 ; i<allATags.length ; i++){
        let matchLink = "https://www.espncricinfo.com"+ch(allATags[i]).attr("href");
        getMatchDetails(matchLink); //60times
    }
}


// node js feature
module.exports = getAllMatches;