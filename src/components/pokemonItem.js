import { PokemonType } from "./pokemonType";
import { fetchPokemonImage } from "../services/pokemonImageService";

export function PokemonItem({name, types, id}) {
    return (
        <article className="pokemon-item">
            <img src={fetchPokemonImage(id)} />
            <h3>{name}</h3>
            <footer>
                {
                    types.map(({type}, index) => (
                        <PokemonType key={index} type={type.name} />
                    ))
                }
            </footer>
        </article>
    )
}