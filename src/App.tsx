import { useState, useEffect } from "react";
import "./App.css";

interface PokemonFetch {
  name: string;
  weight: number;
  height: number;
}

function App() {
  const [data, setData] = useState<PokemonFetch>();
  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const data = await response.json();
      setData(data);
    }
    getPokemon();
  }, [pokemonName]);

  return (
    <div className="App">
      <h5>Nome do pokemon</h5>
      <p>{data?.name}</p>
      <h5>Peso do pokemon</h5>
      <p>{data?.weight}kg</p>
      <h5>Altura do pokemon</h5>
      <p>{data?.height}</p>
      <input type="text" onChange={(e) => setPokemonName(e.target.value)} />
    </div>
  );
}

export default App;
