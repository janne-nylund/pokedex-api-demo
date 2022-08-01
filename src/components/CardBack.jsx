import { useEffect, useState } from "react";
import { fetchStats } from "../api/fetchData";

const CardBack = ({ flipped, setFlipped, pokemons, index }) => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchPokemonStats = async () => {
      try {
        setStats(await fetchStats(index + 1));
      } catch (err) {
        console.log(err);
      }
    }
    fetchPokemonStats()
  }, [index])

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
      {stats &&
        <div>
          <ul className="list">
            <li><b>HP: </b>{stats.hp}</li>
            <li><b>Attack: </b>{stats.attack}</li>
            <li><b>Defense: </b>{stats.defense}</li>
            <li><b>Special attack: </b>{stats.special_attack}</li>
            <li><b>Special defense: </b>{stats.special_defense}</li>
            <li><b>Speed: </b>{stats.speed}</li>
            <li><b>TOTAL: {Object.values(stats).reduce((acc, curr) => acc + curr, 0)}</b></li>
          </ul>
        </div>}
      <button className="open-btn" onClick={() => setFlipped(!flipped)}>close</button>
    </div>
  );
};

export default CardBack;
