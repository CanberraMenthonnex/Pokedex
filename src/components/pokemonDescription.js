


export function PokemonDescription({id, stats, types}){
    console.log("test");
    return(
        <aside className="pokemon-description">
            <div>
                <h3>{ id[0].toUpperCase() + id.slice(1)}</h3>
                {
                    stats.map((stat, index) => (
                        <div className="flex" key={index}>
                            <div>
                                {stat.stat.name}:
                            </div>
                            <div className="div-base-stat">
                                {stat["base_stat"]}
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </aside>
    )
}