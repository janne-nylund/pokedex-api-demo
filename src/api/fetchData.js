// fetches the 151 first Pokemons (name, url)
export const fetchPokemons = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await res.json();
      return data.results;
    } catch (err) {
      console.log(err);
    }
  };
  
  // takes pokemons as props and iterates over them and fetches all the individual urls
  export const pokemonDetails = async (pokemons) => {
    let details = [];
    for (const [index, item] of pokemons.entries()) {
      try {
        const res = await fetch(item.url);
        const data = await res.json();
  
        const res2 = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${index + 1}`
        );
        const desc = await res2.json();
  
        const newDetails = {
          name: data.name[0].toUpperCase() + data.name.slice(1),
          src: data.sprites.other.dream_world.front_default,
          type: data.types,
          description: desc.flavor_text_entries[2].flavor_text.replace(
            /\n|\f/g,
            " "
          )
        };
        details.push(newDetails);
      } catch (err) {
        console.log(err);
      }
    }
    return details;
  };
  