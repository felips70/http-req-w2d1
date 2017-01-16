var https = require('https');

function getAndPrintHTML (options) {

  var myData = '';

  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {

      myData += data;
    });


    response.on('end', function() {
      console.log('Chunk Received. ', myData);
    })

  });


}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);