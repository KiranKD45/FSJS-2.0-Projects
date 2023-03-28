import React from "react"
import './App.css';
import { useState } from "react";
import Axios from "axios"

function App() {

const [pokemonName, setPokemonName] = useState("");
const [pokemonchosen, setPokemonchosen] = useState(false);
const [pokemon,setPokemon]= useState({
                name : "",
                species : "",
                img: "",
                hp : "",
                attack:"",
                defence:"",
                abilities:"",
                type:"",
});

const searchPokemon = ()=>{
  Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
    (response)=>{
      console.log(response);
             setPokemon(
              {
                name : pokemonName,
                species : response.data.species.name,
                img: response.data.sprites.front_default,
                hp : response.data.stats[0].base_stat,
                attack:response.data.stats[1].base_stat,
                defence:response.data.stats[2].base_stat,
                abilities: response.data.abilities[0].ability.name,
                type:response.data.types[0].type.name,
              }
             );
             setPokemonchosen(true);
    }
  )


}


  return (
    <div className="App">
    <div className = "Heading">
      <h1>Pokemon app</h1>
      <input type="text" onChange={(event) =>{setPokemonName(event.target.value)}}/>
      <button type="submit" onClick={searchPokemon}>Search Pokemon</button>
    </div>
    <div className="display-section">
      {!pokemonchosen ? <h1>Please Choose a valid pokemon</h1> :         
        (
          <div>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.img} alt={pokemonName}/>
        <h3>Species:{pokemon.species}</h3>
        <h3>HP:{pokemon.hp}</h3>
        <h3>Attack:{pokemon.attack}</h3>
        <h3>Defence:{pokemon.defence}</h3>
        <h3>Ability: {pokemon.abilities}</h3>
        <h3>Type:{pokemon.type}</h3>   

        
        </div>
        )
        
        }
    </div>
    </div>
  );
}

export default App;
