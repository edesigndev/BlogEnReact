//Template strings

const nombre = "Edgar";
const apellido = "Lázaro";

console.log(nombre + " " + apellido);

const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

function obtenerSaludo(miNombre) {
  // return 'Hola' + miNombre
  const saludo = `Hola ${miNombre === "" ? "desconocido" : miNombre}`;
  //   return `Hola ${miNombre}`;
  return saludo;
}

console.log(obtenerSaludo(nombreCompleto));
