const express = require("express");
const app = express();
const port = 3000;

// middleware
// permite responder con archivos estaticos
// segun la ruta
// no es necesario conocer la ruta absoluta
app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.get("/", (req, res) => {
  res.send("Hello World v2 - express");
});

app.listen(port, () => {
  console.log(`Escuchando solicitudes en el puerto ${port}`);
});
