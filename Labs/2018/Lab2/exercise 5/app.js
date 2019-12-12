const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Slot Machine');
  if(req.url == '/play'){
    console.log(`Playing...`);
  }
  if(req.url == '/spin'){
    console.log(`Spinning...`);
  }
  if(req.url != '/spin' && (req.url != '/play')){
    console.log(`Please play or spin!`);
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

server