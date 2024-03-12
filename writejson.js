const fs = require("fs")
const data = require("./dados/dados.json")

data.push({
    name: "Teste",
    lastname: "Testelastname"
})

fs.writeFile("./dados/dados.json", JSON.stringify(data), err=>{

})