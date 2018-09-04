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
    this.io.emit('chatDisconnect', id);
  }

  someoneEnter(callback) {
    this.io.on('someoneEnter', (id) => callback(id,true));
  }

  someoneOut(callback) {
    this.io.on('someoneOut', (id) => callback(id,false));
  }
}

export default new Socket();



