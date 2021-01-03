const fs = require('fs');
let buff = fs.readFileSync(process.argv[2]);
//console.log(data.toString());

let data = buff.toString().split("\n");

console.log(data.length - 1);


