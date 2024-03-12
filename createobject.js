const fs = require("fs")
const data = require("./dados/dados.json")
const {getByFlag} = require("./getbyflag")
const { debug } = require("console")


const dado = ["name","lastname"].reduce((current,next) =>{
    debugger
    current[next] = getByFlag("--" + next)
    return current
}, {})

data.push(dado)

fs.writeFile("./dados/dados.json", JSON.stringify(data), err=>{
    if(err){
        throw err
    }
    console.log("Objeto adicionado")
})