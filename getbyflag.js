module.exports.getByFlag  = flag => {
    const indexFlag = process.argv.indexOf(flag)
    if(indexFlag > -1){
        return process.argv[indexFlag+1]
    }
    return null;
}