

let sum = 0;
 for(var i=2;i<process.argv.length;i++)
 {
    let x = parseInt(process.argv[i])
     sum+=x
 }

 console.log(sum)