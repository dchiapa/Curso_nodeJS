const { frutas, dinero } = require("./variables");

const cowsay = require("cowsay");

frutas.forEach((fruta) => {
  console.count(fruta);
});

console.log("Dinero disponible:", dinero);

console.log(
  cowsay.say({
    text: "I'm a cow!",
    e: "oo",
    T: "U ",
  })
);
