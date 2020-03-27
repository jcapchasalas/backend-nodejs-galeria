const http = require('http');
const app = require('../app');

//almacenar el puerto 
const port = parseInt(process.env.port, 10) || 8010;
app.set('port', port); //se asigna el puerto a la constante "app"


// Escuchar Peticiones
const server = http.createServer(app);
server.listen(port);

console.log('Express Server corriendo en el puerto 8010: \x1b[32m%s\x1b[0m', 'online');