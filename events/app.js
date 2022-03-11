let obj = {
  nombre: "Ramon",
  edad: 44,
  apellido: "Aguirre",
};

console.log(obj.nombre); //Esta manera de extraer informacion de un objeto es la vista en la practica anterior
console.log(obj["nombre"]); //De esta manera podremos solicitar informacion tambien y ahora podemos crear una variable y ingresarla dentro de los [].

let mykey = "nombre"; // Esta es la variable que se ingresara en los []
console.log(obj[mykey]); //ahora se remplazara la variable que contiene el nombre del elemento

mykey = "keypress";
console.log(obj[mykey]()); //

mykey = "mouseOver";
console.log(obj[mykey]()); //

let myArray = [];

myArray.push(4);
myArray.push("una cadena");
myArray.push(obj);
myArray.push(function () {
  Console.log("Hola desde el array");
});
console.log(myArray);

let funcArray = [];

funcArray.push(() => {
  console.log("Function 1");
});

funcArray.push(() => {
  console.log("Function 2");
});

funcArray.push(() => {
  console.log("Function 3");
});

funcArray.forEach((item) => {
  item();
});
