const http = require('http');

function start() {
  function onRequest(req, res) {
    console.log('request received');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('hello world')
    res.end();
  }
  
  http.createServer(onRequest).listen(8888);
  console.log('server has started');
}


exports.start = start;