import Pokemon from "./Pokemon"

const PokemonList = ({pokemons, onPokemonChangeStatus, caughted}) => {
  console.log("🎨 PokemonList")
  
  return (
    <div className="pokemons-list">
      {pokemons.map(pokemon => {
        return <Pokemon 
          key={pokemon.id} 
          status={caughted.includes(pokemon.id)}
          pokemon={pokemon}
          onPokemonChangeStatus={onPokemonChangeStatus} />
      })}
    </div>
  )
}

export default PokemonList;
