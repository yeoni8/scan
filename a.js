var req = require('request');
var jquery = require('cheerio');
var chalk = require('chalk');
var scanf = require('scanf');





function pageHandlder($){


    var links = $('a');

    for (var i=0; i<links.length; i++){
        console.log('link ' + (i+1) + ' is ' + chalk.blue($(links[i]).attr('href')));
    }

    console.log (chalk.green("Enter number to continue"));

    var answer = scanf('%d') - 1;

    if (links[answer]){
        loadURL($(links[answer]).attr('href'));

    }
    else {
        console.log(chalk.red('byeeeee'));
    }


}




function loadURL(url){
    //
    //console.log(url.substr(0,4));
    //return;

    url = url.substr(0,4) == 'http' ? url : 'http://' + url;
    req(url,function(error,response,body){

        pageHandlder(jquery.load(body));
    });

}



loadURL(process.argv[2]);


