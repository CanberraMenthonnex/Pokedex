import { PokemonType } from "./pokemonType";

export function PokemonItem({name, types}) {
    return (
        <article className="pokemon-item">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png" />
            <h3>{name}</h3>
            <footer>
                {
                    types.map(type => (
                        <PokemonType type={type.name} />
                    ))
                }
            </footer>
        </article>
    )
}