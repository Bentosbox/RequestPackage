var request = require('request');
var fs = require('fs');
console.log('Downloading ...');
request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {
        // console.log('Response Status Code: ', response.statusCode);                           // Note 3
        console.log('Response Status Code: ', response.statusCode);
        console.log('Content Type: ', response.headers['content-type']);
       })
       .on('end', function(end) {
        console.log('Download Completed');
       })
       .pipe(fs.createWriteStream('./future.jpg'));

