//Arreglos

// 1era Forma
let arregloGenero = new Array(2); //Dos elementos vacios
arregloGenero[0] = "Masculino";
arregloGenero[1] = "Femenino";
arregloGenero.push("Indefinido"); //Al final el arreglo
// arregloGenero.push("Femenino");

console.log(arregloGenero);
console.log(`Indice 2: ${arregloGenero[2]}`);

// 2da Forma
let arregloAnimales = ["Gato", "Perro", "Loro"];
arregloAnimales.push("Mono");

console.log("arregloAnimales", arregloAnimales);

let arregloAnimales2 = [...arregloAnimales];
// let arregloAnimales2 = [...arregloAnimales, "Leon"];
console.log("arregloAnimales2", arregloAnimales2);

let arregloAnimales3 = arregloAnimales.concat(arregloAnimales2);
console.log("arregloAnimales3", arregloAnimales3);
