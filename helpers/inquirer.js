//ty
const inquirer = require('inquirer')
require('colors')

const questions = [
    {
        type:'list',
        name:'option',
        message:'Seleccione una opcion\n',
        choices: [
            {
                value: '1',
                name:`${'1.'.yellow} Crear tarea`
            },
            {
                value: '2',
                name:`${'2.'.yellow} Mostrar tareas`
            },
            {
                value: '3',
                name:`${'3.'.yellow} Mostrar tareas completadas`
            },
            {
                value: '4',
                name:`${'4.'.yellow} Mostrar tareas pendientes`
            },
            {
                value: '5',
                name:`${'5.'.yellow} Completar tarea(s)`
            },
            {
                value: '6',
                name:`${'6.'.yellow} Borrar tarea`
            },
            {
                value: '7',
                name:`${'7.'.yellow} Salir`
            }
        ]
    }
]

const inquirerMenu = async () =>{

    console.clear()
    console.log("==========================".green)
    console.log("           MENU".green)
    console.log("==========================\n".green)

    const {option} = await inquirer.prompt(questions)

    return option
}

const pause = async() => {

    await inquirer.prompt([
        {
            type:'input',
            name: 'enter',
            message:`Presiones ${'enter'.green} para continuar`
        }
    ])
}

module.exports = {inquirerMenu,pause}