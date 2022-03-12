var Emitter = require("./emitter"); // Se manda llamar el modulo del archivo emitter.js

var emtr = new Emitter(); //Ahora se crea un evento con el modulo anterior

emtr.on("greet", () => {
  //ejecutamos el emtr.on para ingresar un array de greet con una string
  console.log("Somewhere, someone said hello.");
});

emtr.on("greet", () => {
  //Ejecutamon el emtr.on para ingresar otro sting en greet
  console.log("A greeting occurred!");
});

console.log("Hello!");
emtr.emit("greet"); //ejecutamos todo lo que tenga greet en el Emitter

emtr.on("jump", () => {
  //ahora ingresamos jump y un texto
  console.log("someone jumped!");
});

console.log(emtr); //ejecutamos todo el emtr el cual tiene la forma de un objeto
emtr.emit("jump"); //ejecutamos el jump del Emitter
