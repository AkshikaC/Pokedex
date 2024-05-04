import React, { useEffect, useState } from 'react';
import './DetailView.css';

const DetailView = ({ pokemon }) => {
  const { name, sprite, type, height, weight } = pokemon;
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}/`)
      .then(res => res.json())
      .then(data => {
        const entry = data.flavor_text_entries.find(entry => entry.language.name === "en");
        setDescription(cleanDescription(entry.flavor_text));
      })
      .catch(err => console.error(err));
  }, [pokemon.id]);

  const cleanDescription = (text) => {
    return text.replace(/\n/g, ' ').replace(/\f/g, ' ');
  };



  return (
    <section className="detail-view">
      <img src={sprite} className="sprite-image" alt="sprite" />
      <div className="data-wrapper">
        <h1 className="data-name">{name && name.charAt(0).toUpperCase() + name.slice(1)}</h1>
        <p className="data-char">Description: {description}</p>
        <p className="data-char">Type: {type && type.charAt(0).toUpperCase() + type.slice(1)}</p>
        <p className="data-char">Height: {height} </p>
        <p className="data-char">Weight: {weight} </p>
      </div>
    </section>
  );
};

export default DetailView;
