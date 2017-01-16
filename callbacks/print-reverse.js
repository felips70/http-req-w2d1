var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  var o = '';
  for (var i = html.length - 1; i >= 0; i--)
    o += html[i];

  console.log(o);
}

getHTML(requestOptions, printReverse);