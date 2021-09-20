import heroes from "../data/heroes";

// console.log(heroes);

export const getHeroesId = (id) => {
  return heroes.find((item) => item.id === id);
};

// console.log(getHeroesId(2));

export const getHeroesPropietario = (propietario) => {
  return heroes.find((item) => item.propietario === propietario);
};

// console.log(getHeroesPropietario("DC"));
