import { useCallback, useEffect, useState } from "react";

import { fetchPokemons, pokemonDetails } from "./api/fetchData";

import BounceLoader from "react-spinners/BounceLoader";

import Select from "./components/Select";
import Card from "./components/Card";
import Buttons from "./components/Buttons";
import "./styles.css";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [details, setDetails] = useState([]);
  const [index, setIndex] = useState(0);

  // preLoad "hack" that create <img> elemets with Pokemon sprites
  const preloadImages = useCallback(() => {
    details.forEach((item) => {
      document.createElement("img").src = item.src;
    });
  }, [details]);

  // call preloadImages on start and if return value of preloadImages changes
  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  // load Pokemon name and url
  useEffect(() => {
    const getPokemons = async () => {
      try {
        setPokemons(await fetchPokemons());
      } catch (err) {
        console.log(err);
      }
    };
    getPokemons();
  }, []);

  // load Pokemon details based on pokemon urls
  useEffect(() => {
    const getPokemonDetails = async () => {
      try {
        setDetails(await pokemonDetails(pokemons));
      } catch (err) {
        console.log(err);
      }
    };
    getPokemonDetails();
  }, [pokemons]);

  // setIndex of active Pokemon
  const handleChange = (e) => {
    setIndex(Number(e.target.value));
  };

  return (
    <div className="container">
      <div className="App">
        <div className="wrapper">
          {details.length === 0 && (
            <div className="loader">
              <p style={{ color: `#089ea8` }}>LOADING POKEMONS...</p>
              <BounceLoader color={`#089ea8`} />
            </div>
          )}
          {details.length > 0 && (
            <div>
              <h1>POKÉDEX</h1>
              <h3>Gen 1 Pokémon list</h3>
              <div className="card">
                <Select details={details} handleChange={handleChange} />
                <Card details={details} index={index} />
                <Buttons index={index} setIndex={setIndex} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
