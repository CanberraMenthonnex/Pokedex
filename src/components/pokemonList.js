import { useState, useEffect } from "react"
import { PokemonItem } from "./pokemonItem"
import { getListPokemon, getDataPokemon } from "../services/pokemonService";
import { POKEMON_BY_PAGE } from "../constants/pokemon";
import {PokemonDescription} from "./pokemonDescription"
export function PokemonList() {

    const [pokemons, setPokemons] = useState([]);
    const [index, setIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if(index < pokemons.length - 1) {
            return 
        }
        const refIndex = index === 0 ? index : index + 1
        setIsLoading(true)
        getListPokemon(((refIndex / POKEMON_BY_PAGE) * POKEMON_BY_PAGE), POKEMON_BY_PAGE)
        .then((response) =>  
            Promise.all(response.data.results.map(pokemon => 
                getDataPokemon(pokemon.url)
                    .then(data => data.data))
            )            
        )
        .then(pokemons => {
            setPokemons(prev => [...prev, ...pokemons])
            setIsLoading(false)
        });
    }, [index]);


    const prevItem = () => {
        if(isLoading) return
        setIndex(index => index > 0 ? index - 1 : 0)
    }

    const nextItem = () => {
        if(isLoading) return
        setIndex(index => {
            return index + 1
        })
    }

    console.log(pokemons)

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

                {
                    pokemons.length > 0 && <PokemonDescription id={pokemons[index].name} stats={pokemons[index].stats} types={pokemons[index].types}/>
                }
                
                
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