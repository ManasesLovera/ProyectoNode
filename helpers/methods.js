const task = require('../models/task.js')
const inquirer = require('inquirer')

const addtask = async(tasks) =>{

    const {description} = await inquirer.prompt([{
    type:'input',
    name:'description',
    message:'\nEscribe la descripcion de la tarea: ',
    validate(value){
        if(value.length == 0){
            return "Debe ingresar la descripcion"
        }
        return true
    }
    }])

    tasks.add(new task(description))

}

const showtasks = (tasks) =>{

    console.log(tasks._listado)
}

module.exports = {
    addtask,
    showtasks
}