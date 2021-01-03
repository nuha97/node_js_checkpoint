let http = require('http');
let url = process.argv[2];

http.get(url,function(request){
    request.setEncoding('utf8');
    request.on('data', (data) => console.log(data));
    
    
})
