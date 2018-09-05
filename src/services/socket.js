import io from 'socket.io-client';

const SOCKET_URL = 'https://awesome-chat-api.herokuapp.com';

class Socket {
  constructor() {
    this.io = io(SOCKET_URL);
  }

  connect(id) {
    this.io.emit('chatConnect', id);
    this.addToRoom(id);
  }

  disconnect(id) {
    this.io.emit('chatDisconnect', id);
    this.removeFromRoom(id);
    this.unregisterToReceiveMessage();
  }

  someoneEnter(callback) {
    this.io.on('someoneEnter', (id) => callback(id,true));
  }

  someoneOut(callback) {
    this.io.on('someoneOut', (id) => callback(id,false));
  }

  addToRoom(roomName) {
    this.io.emit('addToRoom', roomName);
  }

  removeFromRoom(roomName) {
    this.io.emit('removeFromRoom', roomName);
  }

  sendMessage(id, user, message) {
    this.io.emit('chatMessage', { id, user, message });
  }

  receiveMessage(callback) {
    this.io.on('chatReceiveMessage', ({ user, message }) => callback(user.id, user, message));
  }

  unregisterToReceiveMessage() {
    this.io.off('chatReceiveMessage');
  }
}

export default new Socket();



