// const http=require('http')
// const url=process.argv[0]


// http.get(url,function(err,response)={
// 	if(err) {return console.log(err)}

// 	response.on('data',function(data){return console.log(data)})
// })
const http = require('http');

if(process.argv.length < 3) {
    console.log('Please specify an endpoint');
    return;
}

const endpoint = process.argv[2];

http.get(endpoint, (response) => {
    response.setEncoding('utf8');

    response.on('error', (error) => {
        console.error(error);
    });

    response.on('data', (data) => {
        console.log(data);
    });
});