const Ticket = require('./ticket');



class TicketList {

  constructor(){

    this.ultimoNumero = 0
    this.pendientes = []
    this.asignados = []

  }

  get siguienteNumero(){
    return this.ultimoNumero += 1
  }

  get ultimos13() {
    return this.asignados.slice(0,13)
  }

  crearTicket() {
    const nuevoTicket = new Ticket(this.siguienteNumero)
    this.pendientes.push( nuevoTicket )
    return nuevoTicket
  }

  asignarTicket(agente, ventanilla) {
    if (this.pendientes.length === 0) {
      return null
    }
    const siguienteTicket = this.pendientes.shift()
    siguienteTicket.agente = agente
    siguienteTicket.ventanilla = ventanilla
    // insertamos al inicio del arreglo
    this.asignados.unshift(siguienteTicket)

    return siguienteTicket
  }

}

module.exports = TicketList