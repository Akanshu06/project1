const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    // Set the response headers
    res.setHeader('Content-Type', 'text/html');

    // Determine the URL requested by the user
    switch (req.url) {
        case '/home':
            res.write('<html><head><title>Welcome home</title></head><body><h1>Welcome home</h1></body></html>');
            break;
        case '/about':
            res.write('<html><head><title>About Us</title></head><body><h1>Welcome to About Us page</h1></body></html>');
            break;
        case '/node':
            res.write('<html><head><title>Node Js Project</title></head><body><h1>Welcome to my Node Js project</h1></body></html>');
            break;
        default:
            res.write('<html><head><title>404 Not Found</title></head><body><h1>404 Not Found</h1></body></html>');
    }

    // Send the response
    res.end();
});

// Start the server on port 4000
server.listen(4000, () => {
    console.log('Server is running on port 4000');
});

