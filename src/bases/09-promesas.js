import { getHeroesId } from "./bases/08-importar";

// console.log(getHeroesId(2));

// const promesa = new Promise((resolve, reject) => {
//   const p1 = getHeroesId(2);
//   if (p1) {
//     resolve(p1);
//   } else {
//     reject("No se pudo encontrar el heroe");
//   }
// });

// promesa.then((heroe) => {
//   console.log("Encontrado", heroe);
// });

const ObtenerHeroePorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroesId(id);
      if (p1) {
        resolve(p1);
      } else {
        reject("No se pudo encontrar el heroe");
      }
    }, 3000);
  });
};

ObtenerHeroePorId(2).then(console.log).catch(console.warn);
