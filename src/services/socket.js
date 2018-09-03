import io from 'socket.io-client';

const SOCKET_URL = 'http://localhost:4555';


class Socket {
  constructor() {
    this.io = io(SOCKET_URL);
  }

  connect(id) {
    this.io.emit('chatConnect', id);
  }

  disconnect(id) {
    this.io.emit('disconnect', id);
  }

  someoneEnter(callback) {
    this.io.on('someoneEnter', (id) => callback(id,true));
    console.log('Alguém entrou no chat');
  }
}

export default new Socket();



