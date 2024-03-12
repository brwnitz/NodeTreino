const fs = require("fs")

fs.readFile("./files/README.md","utf-8",(err,file)=>{
    if(err){
        throw err
    }
    console.log(file)
})


fs.readFile("./files/testeImagem.jpg",(err,file)=>{
    if(err){
        throw err
    }
    console.log(file)
})

console.log("iniciando leitura")