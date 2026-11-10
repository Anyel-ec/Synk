const _ = require('lodash');
console.log("Iniciando aplicación de prueba para Snyk...");

const user = {
  name: 'Analista',
  role: 'Security'
};

console.log(_.toPlainObject(user));
