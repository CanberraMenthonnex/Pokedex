import { useState } from "react"
import { PokemonItem } from "./pokemonItem"

export function PokemonList() {

    const [pokemons, setPokemons] = useState([
        {
            name: "bulbasaur",
            id: 10,
            url: "https://pokeapi.co/api/v2/pokemon/1/",
            types: [{name: "fire"}]
        },
        {
            name: "ivysaur",
            id: 10,
            url: "https://pokeapi.co/api/v2/pokemon/2/",
            types: [{name: "fire"}]
        },
        {
            name: "venusaur",
            id: 10,
            url: "https://pokeapi.co/api/v2/pokemon/3/",
            types: [{name: "fire"}]
        },
        {
            name: "charmander",
            id: 10,
            url: "https://pokeapi.co/api/v2/pokemon/4/",
            types: [{name: "fire"}]
        },
        {
            name: "charmeleon",
            id: 10,
            url: "https://pokeapi.co/api/v2/pokemon/5/",
            types: [{name: "fire"}]
        },
        {
            id:11,
            name: "charizard",
            url: "https://pokeapi.co/api/v2/pokemon/6/",
            types: [{name: "fire"}]
        },
        {
            name: "squirtle",
            id: 10,
            url: "https://pokeapi.co/api/v2/pokemon/7/",
            types: [{name: "fire"}]
        },
        {
            name: "wartortle",
            id: 10,
            url: "https://pokeapi.co/api/v2/pokemon/8/",
            types: [{name: "fire"}]
        },
        {
            name: "blastoise",
            id: 10,
            url: "https://pokeapi.co/api/v2/pokemon/9/",
            types: [{name: "fire"}]
        },
        {
            name: "caterpie",
            id: 10,
            url: "https://pokeapi.co/api/v2/pokemon/10/",
            types: [{name: "fire"}]
        },
        {
            name: "metapod",
            id: 10,
            url: "https://pokeapi.co/api/v2/pokemon/11/",
            types: [{name: "fire"}]
        },
        {
            name: "butterfree",
            id: 10,
            url: "https://pokeapi.co/api/v2/pokemon/12/",
            types: [{name: "fire"}]
        },
        {
            name: "weedle",
            id: 10,
            url: "https://pokeapi.co/api/v2/pokemon/13/",
            types: [{name: "fire"}]
        },
        {
            name: "kakuna",
            id: 10,
            url: "https://pokeapi.co/api/v2/pokemon/14/",
            types: [{name: "fire"}]
        },
        {
            name: "beedrill",
            id: 10,
            url: "https://pokeapi.co/api/v2/pokemon/15/",
            types: [{name: "fire"}]
        },
        {
            name: "pidgey",
            id: 10,
            url: "https://pokeapi.co/api/v2/pokemon/16/",
            types: [{name: "fire"}]
        },
        {
            name: "pidgeotto",
            id: 10,
            url: "https://pokeapi.co/api/v2/pokemon/17/",
            types: [{name: "fire"}]
        },
        {
            name: "pidgeot",
            id: 10,
            url: "https://pokeapi.co/api/v2/pokemon/18/",
            types: [{name: "fire"}]
        },
        {
            name: "rattata",
            id: 10,
            url: "https://pokeapi.co/api/v2/pokemon/19/",
            types: [{name: "fire"}]
        },
        {
            name: "raticate",
            id: 10,
            url: "https://pokeapi.co/api/v2/pokemon/20/",
            types: [{name: "fire"}]
        }
    ])

    const [index, setIndex] = useState(1)

    const prevItem = () => {
        setIndex(index => index > 0 ? index - 1 : 0)
    }

    const nextItem = () => {
        setIndex(index => {
            const newIndex = index + 1 
            if(newIndex > pokemons.length - 1) {
                //fetch new pokemons
            }
            return newIndex
        })
    }

    return (
        <div className="pokedex">
            <h2 className="pokedex-title">Liste des pokemons</h2>
            <div className="pokedex-screen">
                <div className="pokemon-list" style={{transform: `translateX(-${index * 30}vw)`}}>
                    {
                        pokemons.map(pokemon => (
                            <PokemonItem name={pokemon.name} types={pokemon.types} />
                        ))
                    }
                </div>
            </div>
            <div className="pokedex-footer">
                <div className="pokedex-id">
                    {
                       pokemons ? pokemons[index].id : ""
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