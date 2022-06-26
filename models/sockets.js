const TicketList = require('./ticketList');



class Sockets {

  constructor(io){

    this.io = io

    this.ticketList = new TicketList()

    this.socketEvents();

  }

  socketEvents(){

    this.io.on('connection', (socket) => {

      console.log('cliente conectado');

      socket.on('solicitar-ticket', (data, callback) => {
        const nuevoTicket = this.ticketList.crearTicket()
        callback( nuevoTicket )
      })

      socket.on('asignar-siguiente-ticket', (user, callback) => {
        const siguienteTicket = this.ticketList.asignarTicket(user.agente,user.ventanilla)
        callback( siguienteTicket )

        this.io.emit('tickets-en-ventanillas', this.ticketList.ultimos13 )
      })

    })
  }

}

module.exports = Sockets