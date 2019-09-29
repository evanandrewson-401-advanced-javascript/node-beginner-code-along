const http = require('http');
const url = require('url');

function start(route) {
  function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log('request for ' + pathname + ' received');

    route(pathname);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('hello world')
    res.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log('server has started');
}


exports.start = start;