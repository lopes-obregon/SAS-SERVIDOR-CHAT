// server.js

const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer();
const io = new Server(server);

// Evento para lidar com conexões de clientes
io.on('connection', (socket) => {
  console.log('Novo cliente conectado');

  // Evento para lidar com mensagens do cliente
  socket.on('chat message', (msg) => {
    console.log('Mensagem recebida:', msg);
    // Broadcast da mensagem para todos os clientes conectados
    io.emit('chat message', msg);
  });
  //desconectar do servidor
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

// Inicia o servidor na porta 3000
server.listen(3000, () => {
  console.log('Servidor de chat em tempo real iniciado na porta 3000');
});
