import { v4 as uuidv4 } from "uuid";

const Card = ({ pokemons, index }) => {
  return (
    <div>
      <h2>{pokemons[index].name}</h2>
      <div className="sprite-wrapper">
        <img
          className="sprite"
          src={pokemons[index].src}
          alt={pokemons[index].name}
        />
      </div>
      <p>
        <b>Type:</b>&nbsp;
        <span key={uuidv4()} className="types">
          {pokemons[index].type}
        </span>
      </p>
      <div className="description">{pokemons[index].description}</div>
    </div>
  );
};

export default Card;
