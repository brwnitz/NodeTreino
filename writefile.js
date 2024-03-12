const fs = require("fs")

const md = `
# Conteudo MD criado dinamicamente

* item 1
* item 2
`
const users = [{ name: "Bruno", lastname: "Torres" }]
const createDados = () =>{
    fs.writeFile("./dados/dados.json", JSON.stringify(users), err => {
        if(err){
            throw err
        }
        console.log("Arquivo json salvo")
    })
}
if(!fs.existsSync("dados")){
    fs.mkdir("dados",err=>{
        if(err){
            throw err
        }
        console.log("pasta criada")
        createDados()
    })
}
else{
    createDados()
}

