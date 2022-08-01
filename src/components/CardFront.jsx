import { v4 as uuidv4 } from "uuid";

const CardFront = ({ flipped, setFlipped, pokemons, index }) => {

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
          {pokemons[index].type}  <button className="open-btn" onClick={() => setFlipped(!flipped)}>View Stats</button>
        </span>
      </p>
      <div className="description">{pokemons[index].description}</div>
    </div >
  );
};

export default CardFront;
