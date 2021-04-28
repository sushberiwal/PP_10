// let jsonObj = [{"Runs":"0","Balls":"3","Fours":"0","Sixes":"0"},{"Runs":"2","Balls":"4","Fours":"0","Sixes":"0"},{"Runs":"2","Balls":"9","Fours":"0","Sixes":"0"},{"Runs":"8","Balls":"10","Fours":"1","Sixes":"0"},{"Runs":"15","Balls":"15","Fours":"3","Sixes":"0"},{"Runs":"26","Balls":"19","Fours":"3","Sixes":"1"},{"Runs":"60","Balls":"46","Fours":"5","Sixes":"1"},{"Runs":"0","Balls":"1","Fours":"0","Sixes":"0"}]

const json2xls = require("json2xls");
const fs = require("fs");
const nodexlsx = require("node-xlsx");

// let xls = json2xls(jsonObj);


// fs.writeFileSync('data.xlsx', xls, 'binary');


let data = nodexlsx.parse("data.xlsx");
console.log(data);

console.log(data[0].data);


