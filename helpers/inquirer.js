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
                name:`${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name:`${'2.'.green} Mostrar tareas`
            },
            {
                value: '3',
                name:`${'3.'.green} Mostrar tareas completadas`
            },
            {
                value: '4',
                name:`${'4.'.green} Mostrar tareas pendientes`
            },
            {
                value: '5',
                name:`${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name:`${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name:`${'0.'.green} Salir`
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

const pausa = async() => {

    await inquirer.prompt([
        {
            type:'input',
            message:`Presiones ${'enter'.green} para continuar`
        }
    ])
}

module.exports = {inquirerMenu,pausa}