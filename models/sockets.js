

class Sockets{

    constructor(io){
        this.io = io
        this.socketsEvents()
    }

    socketsEvents(){

        this.io.on('connection', (socketS) => {

            socketS.on('message-from-user', (data) => {
                console.log('from client to server', data)
                this.io.emit('userMessageFromServer', data)
            })
            
        });

    }

}

module.exports = Sockets