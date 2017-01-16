var https = require('https');

module.exports = function getHTML (options, callback) {

  var myData = '';

  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {

      myData += data;
    });


    response.on('end', function() {
      callback(myData);
      console.log('Chunk Received. ', myData);
    })

  });

};

