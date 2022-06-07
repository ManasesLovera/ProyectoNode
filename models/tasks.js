require('colors')
const inquirer = require('inquirer')
const {readData} = require('../helpers/handleData.js')
const { pause } = require('../helpers/inquirer.js')

class tasks{
    
    constructor(){
        this._list = readData() !== null ? readData() : []
    }

    add(task){
        this._list.push(task)
    }

    show(){
        let msg = ''
        console.log()
        for(let i in this._list){
            msg =`${+i+1}:  ${this._list[i].description}  ${(this._list[i].completed)?'completado'.green:'pendiente'.red}`
            console.log(msg)
        }
        console.log()
    }

    showCompleted(){
        console.log('\ntareas completadas:\n')
        for(let task of this._list){
            if(task.completed){
                console.log(`${task.description}`)
            }
        }
        console.log()
    }
    showUnCompleted(){
        console.log(`\ntareas NO completadas:\n`)
        for(let task of this._list){
            if(!task.completed){
                console.log(`${task.description}`)
            }
        }
        console.log()
    }
    async remove(){
        let auxList = []
        for(let i in this._list){
            auxList[i] = {value:i,name:this._list[i].description}
        }
        auxList[auxList.length] = {value: auxList.length, name:' '}
        const {index} = await inquirer.prompt([
            {
                type:'list',
                name:'index',
                message:'Elija la tarea que desea eliminar:\n',
                choices:auxList
            }
        ])
        console.log()
        this._list.splice(index,1)
    }
    async complete(){
        console.log()
        let auxList = []
        for(let i in this._list){
            auxList[i] = {value:i,name:`${(+i+1).toString().yellow}: ${this._list[i].description}`}
        }
        const {index} = await inquirer.prompt([
            {
                type:'list',
                name:'index',
                message:'Elija la tarea a completar:\n',
                choices:auxList
            }
        ])
        console.log()
        this._list[index].completed = true
    }
}
module.exports = tasks