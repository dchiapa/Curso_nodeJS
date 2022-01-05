const express = require("express");
const app = express();
const port = 3000;

// MOTOR DE VISTAS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// middleware
// permite responder con archivos estaticos
// segun la ruta
// no es necesario conocer la ruta absoluta
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", { titulo: "Index" });
});

app.get("/servicios", (req, res) => {
  res.render("servicios", { titulo: "Página de Servicios" });
});

app.use((req, res, next) => {
  res.render("404", { titulo: "Página no encontrada" });
});

app.listen(port, () => {
  console.log(`Escuchando solicitudes en el puerto ${port}`);
});
