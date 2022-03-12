function Emitter() {
  //Esta es la funcion constructora y dentro de esta se inicializa los contenedores de informacion donde se guarda la informacion
  this.events = {};
} //Este modulo exporta el constructor

Emitter.prototype.on = function (type, listener) {
  //Con el metodo prototipo se podra estar aplicando la herencia
  //Cuando se mande llamar a Emitter.on se ejecutara una funcion la cual ocupara type y listener
  this.events[type] = this.events[type] || []; //Se revisa si hay algo dento de events si contiene algo se toma el contenido, pero si no entonces se le asigna un array vacio el cual sera llenado de funciones
  this.events[type].push(listener); // Teniendo el array empujaremos el contenido en el elemento listener
};

Emitter.prototype.emit = function (type) {
  //Esta funcion permitira emitir cualquier cual quier funcion que se le solicite buscar en el events
  if (this.events[type]) {
    //Revisa si la funcion soliciada se encunentra
    this.events[type].forEach(function (listener) {
      //si es encontrada almenos una entonces hace el recorrido para ver si hay otras con el mismo nombre
      listener(); //las ejecuta
    });
  } //Si no encuentra entonces cierra el if
};

module.exports = Emitter; //Exporta el modulo
