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

export const fetchStats = async (id) => {
  try {
    const res = await fetch(`https://pokedex-data-api.herokuapp.com/stats/${id}`);
    const data = await res.json();
    return data.stats;
  } catch (err) {
    console.log(err)
  }
}
  