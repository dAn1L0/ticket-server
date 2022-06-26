const {v4:uuidv4} = require('uuid')


class Ticket {

  constructor(numero) {
    this.id = uuidv4()
    this.numero = numero
    this.agente = null
    this.ventanilla = null
  }

}

module.exports = Ticket