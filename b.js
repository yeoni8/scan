var fs = require('fs');
var http = require('http');
var request = require('request');
var jquery = require('cheerio');

//We need a function which handles requests and send response
var proxy = http.createServer(function (req, res) {


    if (req.url == '/wp-content/themes/punky/images/logo.png'){
        fs.createReadStream('alexfag.png').pipe(res);
        return;
    }

    var x = request('http://davidwalsh.name' + req.url);
    req.pipe(x);
    x.pipe(res);

});


proxy.listen(80);


