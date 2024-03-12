const http = require("http")
const fs = require("fs")
const path = require("path")

const getStaticFile = (_path,type, res) => {
    if(!fs.existsSync(_path)){
        res.writeHead(404)
        console.log(_path,"Nao existe")
        if(type === "text/html")
            _path = path.join(__dirname, "static","404.html")
        else
            return res.end()
    }
    res.writeHead(200, {"ContentType": type})
    fs.createReadStream(_path).pipe(res).on("error",()=>{
        res.writeHead(500)
        res.end
    }).on("finish",()=>{
        console.log("finish")
    })
}

const mimeType = {
    "css": "text/css",
    "html": "text/html",
    "jpg": "image/jpg",
    "js": "application/javascript"
}

const serverStaticFile = (url, res) =>{
    const _path = path.join(__dirname, "static", url)
    const extname = path.extname(url).substring(1)
    getStaticFile(_path, mimeType[extname],res)
}

http.createServer((req,res)=>{
    let url = req.url
    if(url === "/"){
        url = "/index.html"
    }
    if(url === "/favicon.ico"){
        res.end()
    }
    serverStaticFile(url, res)
}).listen(3001)