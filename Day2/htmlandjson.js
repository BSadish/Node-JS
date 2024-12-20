const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Prabesh banc!</h1>');
  } else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const data = {
      message: 'Hello, this is JSON data!',
      status: 'success',
    };
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Not Found');
  }
});

// The server listens on port 3000
server.listen(2000, () => {
  console.log('Server is listening on port 2000...');
});
