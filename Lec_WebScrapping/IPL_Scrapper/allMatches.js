const request = require("request");
const cheerio = require("cheerio");

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
        console.log(matchLink);
    }
}


// node js feature
module.exports = getAllMatches;