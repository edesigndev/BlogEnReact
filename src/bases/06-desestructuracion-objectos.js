//Desestructuración Objectos

const obtenerPersona = () => {
  const persona = {
    nombre: "Edgar",
    apellido: "Lazaro",
    edad: 33,
    email: "edgar.lazaro23@gmail.com",
  };
  return persona;
};
const { email, edad } = obtenerPersona();
console.log("email", email);
console.log("edad", edad);
