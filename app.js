require('colors')
const {mostrarMenu,pausa} = require('./mensajes.js')
console.clear()

const main = async() =>{

    let opt = ''
    do{
        opt = await mostrarMenu()
        console.log(opt)
        if (opt !== '0') await pausa()
    }while(opt !== '0')

}

main()