const fs = require("fs")
const path = require("path")

//console.log(path.basename(__filename))

fs.readdir("./files", (err,files)=>{
    if(err){
        throw err
    }
    console.log(files)
})

console.log("Lendo diretorio")