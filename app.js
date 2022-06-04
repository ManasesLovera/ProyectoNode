//ty
require('colors')
const {addtask} = require('./helpers/methods.js')
const {inquirerMenu,pause} = require('./helpers/inquirer.js')
const {saveData} = require('./helpers/saveFile.js')
const tasks = require('./models/tasks.js')

console.clear()

const main = async() =>{

    let tareas = new tasks()

    let opt = ''
    do{
        opt = await inquirerMenu()

        switch(opt){
            case '1':
                // crear tarea
                await addtask(tareas)
                break
            case '2':
                // mostrar tareas
                await tareas.show()
                break
            case '3':
                // mostrar tareas completadas
                console.log()
                break 
            case '4':
                // mostrar tareas pendientes
                break 
            case '5':
                // completar tarea(s)
                break 
            case '6':
                // borrar tarea
                break 
            case '0':
                // salir
                break
        }

        saveData(tareas._list)

        if (opt !== '7') await pause()

    }while(opt !== '7')

}

main()