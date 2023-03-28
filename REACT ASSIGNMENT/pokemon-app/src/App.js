import React from "react"
import './App.css';
import { useState } from "react";

function App() {

const [pokemonName, setPokemonName] = useState("")

const searchPokemon = ()=>{
  
}


  return (
    <div className="App">
    <div className = "Heading">
      <h1>Pokemon app</h1>
      <input type="text" onChange={(event) =>{setPokemonName(event.target.value)}}/>
      <button type="submit" onClick={searchPokemon}>Search Pokemon</button>
    </div>
    </div>
  );
}

export default App;
