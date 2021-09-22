const colors = {
    fire: "orange"
}

export function PokemonType({type}) {
    return (
        <div className="pokemon-type" style={{background: colors[type]}}>
            {type}
        </div>
    )
}