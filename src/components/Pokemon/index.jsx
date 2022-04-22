import React, { useContext } from 'react';
import { Card } from './styles';
import FavoriteContext from '../../Context/FavoriteContext';


const Pokemon = (props) =>{
    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);
    const { pokemon } = props;

    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
    }
    const heart = favoritePokemons.includes(pokemon.name) ? "💖" : "🖤";
    return(
        <Card className='pokemon-card'>
            <div className='pokemon-img-container'>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image" />
            </div>
            <div className='card-body'>
                <div className='card-top'>
                    <h3>{pokemon.name}</h3>
                    <div>{pokemon.id}</div>
                </div>
                <div className='card-bot'>
                    <div className='pokemon-type'>
                        {pokemon.types.map((type, index) =>{
                            return(
                                <div key={index} className='pokemon-type-text'>{type.type.name}</div>
                            )
                        })}
                    </div>
                    <button className='heart-btn' onClick={onHeartClick}>
                        {heart}
                    </button>
                </div>
            </div>
        </Card>
    )
}
export default Pokemon;