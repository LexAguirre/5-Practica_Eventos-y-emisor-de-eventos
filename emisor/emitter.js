function Emitter() {
  //Esta es la funcion constructora y dentro de esta se inicializa los contenedores de informacion donde se guarda la informacion
  this.events = {};
} //Este modulo exporta el constructor

Emitter.prototype.on = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

Emitter.prototype.emit = function (type) {
  if (this.events[type]) {
    this.events[type].forEach(function (listener) {
      listener();
    });
  }
};

module.exports = Emitter;
