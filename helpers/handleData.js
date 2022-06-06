const fs = require('fs')

const path = './db/data.json'

function saveData(data){

    fs.writeFileSync(path,JSON.stringify(data))
}

function readData(){
    
    if(!fs.existsSync(path)) return null 

    const data = fs.readFileSync(path,{encoding: 'utf-8'})

    return JSON.parse(data)

}

module.exports = {
    saveData,
    readData
}