const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

const port = 3000;

server.listen(port, () => {
  console.log(`Escuchando solicitudes`);
});

// Ejecutar con: nodemon 02-http/app.js
// para evitar terminar el proceso con Ctrl+C
// y volver a iniciarlo con cada cambio
