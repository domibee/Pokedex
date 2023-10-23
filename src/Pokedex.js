import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

Pokedex.defaultProps = {
    pokemon: [
      { id: 4, pokemonName: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, pokemonName: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, pokemonName: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, pokemonName: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, pokemonName: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, pokemonName: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, pokemonName: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, pokemonName: "Eevee", type: "normal", base_experience: 65 }
    ]
};

function Pokedex(props) {
    return (
        <div className='Pokedex'>
            <h2 className='Pokedex-title'>Pokedex</h2>
            <div className='Pokedex-cards'>{props.pokemon.map(p => (
                <Pokecard id={p.id}
                 pokemonName={p.pokemonName}
                 type={p.type}
                 exp={p.base_experience}
                 />
            ))}</div>
        </div>
    )
}
  export default Pokedex;