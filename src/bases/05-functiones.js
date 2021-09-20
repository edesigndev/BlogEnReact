//Funciones

function saludar(nombre) {
  return `Hola ${nombre}`;
}

console.log(saludar("Edgar"));

const saludar2 = (nombre) => {
  return `Hola ${nombre}`;
};
console.log(saludar2("Alexis"));

const saludar3 = (nombre) => `Hola ${nombre}`;
console.log(saludar3("Marco"));
