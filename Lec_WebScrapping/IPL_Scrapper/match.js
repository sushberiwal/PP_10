const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");

request( "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard" , function(err , response , data){
    processData(data);
})

function processData(html){
    let ch = cheerio.load(html);
    // get team names of both the teams !!!
    let bothInnings = ch('.Collapsible');
    // {  <div class="Collapsible"> </div> , <div class="Collapsible"> </div>   };
    for(let i=0 ; i<bothInnings.length ; i++){
        let teamName = ch(bothInnings[i]).find("h5").text();
        teamName = teamName.split("INNINGS")[0].trim();
        console.log(teamName);
        
        // batsman table => Delhi Capitals
        let allTrs = ch(bothInnings[i]).find(".table.batsman tbody tr");
        // { <tr></tr> , <tr></tr> ,<tr></tr> ,<tr></tr> , <tr></tr>, <tr></tr> , <tr></tr> , <tr></tr> , <tr></tr>  };
        for(let j=0 ; j<allTrs.length-1 ;j++){
            let allTds = ch(allTrs[j]).find("td");
            if(allTds.length > 1){
                // { <td> </td> , <td> </td> , <td> </td>  };
                let batsmanName = ch(allTds[0]).find("a").text().trim();
                let runs = ch(allTds[2]).text().trim();
                let balls = ch(allTds[3]).text().trim();
                let fours = ch(allTds[5]).text().trim();
                let sixes = ch(allTds[6]).text().trim();

                console.log(`Batsman = ${batsmanName} Runs = ${runs} Balls = ${balls} Fours = ${fours} Sixes = ${sixes}`);
            }
        }
        console.log("###################################");
    }
}