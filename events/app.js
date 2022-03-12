let obj = {
  nombre: "Ramon",
  edad: 30,
  apellido: "Aguirre",
  keypress: function () {
    console.log("Se ha precionado una tecla");
  },
  mouseOver: function () {
    console.log("El puntero del mouse esta arriba");
  },
};

console.log(obj.nombre); //Esta manera de extraer informacion de un objeto es la vista en la practica anterior
console.log(obj["nombre"]); //De esta manera podremos solicitar informacion tambien y ahora podemos crear una variable y ingresarla dentro de los [].

let mykey = "nombre"; // Esta es la variable que se ingresara en los []
console.log(obj[mykey]); //ahora se remplazara la variable que contiene el nombre del elemento

mykey = "keypress";
console.log(obj[mykey]());

mykey = "mouseOver";
console.log(obj[mykey]());
//En las dos como la funcion no regresa nada sino imprime por su cuente el string entonces al mandar llamar las funciones me imprime lo que tiene la funcion pero tambien un indefinido

let myArray = [];

myArray.push(4);
myArray.push("una cadena");
myArray.push(obj);
myArray.push(function () {
  console.log("Hola desde el array");
});
console.log(myArray);

//Imprime todo el contenido del array sin cambiar el tipo de ninguno de los datos ya que imprime el numero, string, objeto y la funcion que se encuentran en el array

console.log(myArray[2][mykey]()); // En esta linea se imprime un dato del objeto al mandar llamar primero el objeto y luego colocar el parametro con el que buscara el dato

console.log(myArray[3]()); // En esta linea se manda llamar el objeto y luego se le colocan los parentesis para que se ejecuta como una función

let funcArray = []; // Se creara un array el cual contenda solamente funciones

funcArray.push(() => {
  // Con push empujamos la funcion al nuevo array
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
}); //Con forEach recorreremos todos los elementos del array colocandolo en el item y se le colocaran los parentesis para que se ejecute como una función
