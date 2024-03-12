const fs = require("fs")
const data = require("./dados/dados.json")

fs.readFile("./dados/dados.json","utf-8",(err,content)=>{
    if(err){
        throw err
    }
    console.log(JSON.parse(content)[0].name)
})

console.log("-----------")
console.log(data[0].name)