const { log } = require('console')
const http = require('http')

const server =http.
createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>MyFirstReponse</title></head>');
    res.write('<body><h1>Akanshu</h1></body>')
    res.write('</html');
   //process.exit();
})
server.listen(4000)