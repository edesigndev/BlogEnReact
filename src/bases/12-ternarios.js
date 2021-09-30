const activo = true;

//1era Forma
// let mensaje = "";
// if (activo) {
//   mensaje = "Activo";
// } else {
//   mensaje = "Inactivo";
// }

//2da Forma
// const mensaje = activo ? "Activo" : "Inactivo";

//3era Forma
const mensaje = activo && "Activo";
console.log("Mensaje", mensaje);
