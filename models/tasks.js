require('colors')
const {readData} = require('../helpers/saveFile.js')

class tasks{
    
    constructor(){
        this._list = readData() !== null ? readData() : []
    }

    add(task){
        this._list.push(task)
    }

    show(){
        let msg = ''
        console.log('')
        for(let i in this._list){
            msg =`${+i+1}:  ${this._list[i].description}  ${(this._list[i].completed)?'completado'.green:'pendiente'.red}`
            console.log(msg)
        }
        console.log('')
    }

    remove(task){
        let aux = this._list.find( t => { t.id == task.id})
        this._list.filter(tas => { tas.id != aux.id })
    }
}

module.exports = tasks