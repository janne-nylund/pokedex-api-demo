import { v4 as uuidv4 } from "uuid";

const Select = ({ pokemons, handleChange }) => {
  return (
    <select onChange={(e) => handleChange(e)}>
      <option>Select Gen 1 Pokémon</option>
      {pokemons.map((pokemon, index) => (
        <option key={uuidv4()} value={index}>
          {pokemon.name} &#8722;
          {` (${index + 1})`}
        </option>
      ))}
    </select>
  );
};

export default Select;