const { Console } = require("console")
const fs = require("fs")
const https = require("https")

const options = {
    hostname: "parallelum.com.br",
    port: 443,
    path: "/fipe/api/v1/carros/marcas",
    method: "GET"
}

const writeStream = fs.createWriteStream("./dados/carros.json","utf-8")

const request = https.request(options, (res) => {
    res.on("end", ()=>{
            console.log("carros.json criado")
        })
        res.pipe(writeStream)
})

request.end()