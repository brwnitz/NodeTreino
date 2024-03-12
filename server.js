const http = require("http")

http.createServer((req,res)=>{
    res.writeHead(200,{"ContentType": "text/html"})

    res.end("<h1>Hello World</h1>")
}).listen(3000)

console.log("Porta 3000:\n http://localhost:3000")
