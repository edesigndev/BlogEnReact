//Manejo de Objetos
const persona = {
  nombre: "Edgar",
  apellido: "Lazaro",
  edad: 33,
  email: "edgar.lazaro23@gmail.com",
};

// console.log(persona);

persona.nombre = "Edgar Alexis";
// persona['nombre'] = 'Edgar Alexis'

console.table(persona);

const persona2 = { ...persona }; //clonar
persona2.nombre = "Marco";
persona2.apellido = "Lazaro";
persona2.telefono = "271479";
persona2.direcciones = { casa: "Trujillo", trabajo: "Lima" };

// console.table(persona2);
console.log(persona2);
