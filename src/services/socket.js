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

  addToRoom(ids) {
    const roomName = ids.sort((a, b) => a > b).toString().replace(',','-');
    this.io.emit('addToRoom', roomName);
  }

  removeFromRoom(ids) {
    const roomName = ids.sort((a, b) => a > b).toString().replace(',','-');
    this.io.emit('removeFromRoom', roomName);
  }

  sendMessage(id, user, message) {
    this.io.emit('chatMessage', { id, user, message });
  }

  receiveMessage(callback) {
    this.io.on('chatReceiveMessage', ({ user, message }) => callback(user.id, user, message));
  }
}

export default new Socket();



