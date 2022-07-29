// fetches the 151 first Pokemons
export const fetchPokemons = async () => {
    try {
      const res = await fetch("https://pokedex-data-api.herokuapp.com/pokemon");
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
};
  