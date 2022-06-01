require('colors')

const mostrarMenu = () => {

    console.clear()

    console.log("==========================".green)
    console.log("  Seleccione una opcion".green)
    console.log("==========================\n".green)

    console.log(`1. Crear tarea`)
    console.log(`2. Mostrar tareas`)
    console.log(`3. Mostrar tareas completadas`)
    console.log(`4. Mostrar tareas pendientes`)
    console.log(`5. Completar tarea(s)`)
    console.log(`6. Borrar tarea`)
    console.log(`0. Salir`)
}

module.exports = {
    mostrarMenu
}