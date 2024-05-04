import React, { useState } from 'react';
import './App.css';
import { PokeList, DetailView, Pokemon } from './components';

const Pokedex = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({
    name: "bulbasaur",
    description: "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
    height: 7,
    weight: 69,
    type: "grass",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  });

  const handleOnClick = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const newPokemon = new Pokemon(data);
        setPokemon(newPokemon); // Corrected this line to use setPokemon instead of this.setState
      })
      .catch(err => console.log(err));
  }

  const handleOnSearch = () => {
    const lowercasePokemonName = pokemonName.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${lowercasePokemonName}/`)
      .then(res => res.json())
      .then(data => {
        const newPokemon = new Pokemon(data);
        setPokemon(newPokemon);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <div className="Header">
        <input
          type="text"
          className="search-bar"
          placeholder="Enter Pokémon name..."
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button onClick={handleOnSearch}>Search</button>
      </div>
      <PokeList handleOnClick={handleOnClick} />
      <DetailView pokemon={pokemon} />
    </div>
  );
};

export default Pokedex;
