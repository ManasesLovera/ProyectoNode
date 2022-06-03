
const {v4: uuidv4} = require('uuid');

class task {

    constructor(description){
        this.id = uuidv4()
        this.description = description
        this.completed = false
    }
}

module.exports = task