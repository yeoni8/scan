var req = require('request');





function pageHandlder(body){
    console.log(body);
}







req(process.argv[2],function(error,response,body){
    pageHandler(body);
})


