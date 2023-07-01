const http = require('http');

// Array de usuarios
const users = [
  {
    email: 'usuario1@example.com',
    username: 'usuario1',
    name: 'Usuario 1',
    password: 'password1',
    imageUrl: 'https://example.com/usuario1.jpg'
  },
  {
    email: 'usuario2@example.com',
    username: 'usuario2',
    name: 'Usuario 2',
    password: 'password2',
    imageUrl: 'https://example.com/usuario2.jpg'
  },
  // Agrega aquí los demás usuarios...
];

// Crear el servidor
const server = http.createServer((req, res) => {
  // Ruta de ejemplo "/"
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('¡Hola, wetas!');
  }
  // Ruta "/users"
  else if (req.url === '/users' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  }
  // Ruta no encontrada
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página no encontrada');
  }
});

// Especificar el puerto en el que el servidor escuchará las solicitudes
const port = 3000;

// Iniciar el servidor
server.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
