import { v4 as uuidv4 } from "uuid";

const Select = ({ pokemons, handleChange }) => {
    return (
        <select onChange={(e) => handleChange(e)}>
            <option>Select OG Pokemon</option>
            {pokemons.map((pokemon, index) => (
                <option key={uuidv4()} value={index}>
                    {pokemon.name}
                    {` – (${index + 1})`}
                </option>
            ))}
        </select>
    );
};

export default Select;
