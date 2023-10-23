import React from 'react';
import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/';

function Pokecard(props) {
    let imgSrc = `${POKE_API}${props.id}.png`;
    return (
        <div className='Pokecard'>
            <h2 className='Pokecard-title'>{props.pokemonName}</h2>
            <img src={imgSrc} alt = {props.pokemonName}/>
            <h4 className='Pokecard-data'>Type: {props.type}</h4>
            <h4 className='Pokedcard-data'>Exp: {props.exp}</h4>
        </div>
    )
}
export default Pokecard;