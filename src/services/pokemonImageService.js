export function fetchPokemonImage(pokemonId) {
    const idParts = String(pokemonId).split("")
    const supRef = []
    if(idParts.length < 3) {
        supRef.unshift(...new Array(3 - idParts.length).fill("0"))
    }

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${supRef.join("") + pokemonId}.png`
}