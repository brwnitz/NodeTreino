global.console.log("node teste")
console.log(__filename)
console.log(__dirname)
console.log(process.argv)

const getByFlag = flag =>{
    const indexFlag = process.argv.indexOf(flag)
    return process.argv[indexFlag+1]
}

const firstName = getByFlag("--firstname")
const lastName = getByFlag("--lastname")

console.log(`name: ${firstName} ${lastName}`)

