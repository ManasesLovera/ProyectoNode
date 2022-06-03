//ty
require('colors')
const {inquirerMenu,pausa} = require('./helpers/inquirer.js')
//const {pausa} = require('./helpers/mensajes.js')
console.clear()

const main = async() =>{

    let opt = ''
    do{
        opt = await inquirerMenu()
        console.log(opt)
        if (opt !== '0') await pausa()
    }while(opt !== '0')

}

main()