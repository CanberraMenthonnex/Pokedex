import { useState, useEffect } from "react"
import { PokemonItem } from "./pokemonItem"
import { getListPokemon, getDataPokemon } from "../services";

export function PokemonList() {

    const [pokemons, setPokemons] = useState([]);
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if(index < pokemons.length - 1) {
            return 
        }
        getListPokemon(0,10).then((response) => {            
            return Promise.all(response.data.results.map(pokemon => getDataPokemon(pokemon.url).then(data => data.data)))            
        })
        .then(pokemons => setPokemons(prev => [...prev, ...pokemons]));
    }, [index]);

   

    const prevItem = () => {
        setIndex(index => index > 0 ? index - 1 : 0)
    }

    const nextItem = () => {
        setIndex(index => {
            return index + 1
        })
    }

    return (
        <div className="pokedex">
            <h2 className="pokedex-title">Liste des Pokemon</h2>
            <div className="pokedex-screen">
                <div className="pokemon-list" style={{transform: `translateX(-${index * 30}vw)`}}>
                    {
                        pokemons.map((pokemon) => (
                            <PokemonItem id={pokemon.id} key={pokemon.id} name={pokemon.name} types={pokemon.types} />
                        ))
                    }
                </div>
            </div>
            <div className="pokedex-footer">
                <div className="pokedex-id">
                    {
                       pokemons && pokemons.length > 0 ? pokemons[index].id : ""
                    }
                </div>
                <div className="pokedex-button">
                    <button onClick={prevItem}></button>
                    <button onClick={nextItem}></button>
                </div>
            </div>
        </div>
    )
}