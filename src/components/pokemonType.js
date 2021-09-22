const colors = {
    bug: '#9DC130',
    dragon: '#0773C7',
    fairy: '#EF97E6',
    ghost: '#6970C5',
    ground: '#D78555',
    normal: '#9A9DA1',
    psychic: '#F87CA7',
    steel: '#5596A4',
    dark: '#5F606D',
    electric: '#EDD53F',
    fighting: '#D94256',
    flying: '#9BB4E8',
    grass: '#5DBE62',
    ice: '#7ED4C9',
    poison: '#B563CE',
    rock: '#CEC18C',
    water: '#559EDF',
    fire: '#FB9B51',    
}

export function PokemonType({type}) {
    return (
        <div className="pokemon-type" style={{background: colors[type]}}>
            {type}
        </div>
    )
}