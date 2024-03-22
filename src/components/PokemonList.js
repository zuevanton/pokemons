import { useSelector } from "react-redux"
import Pokemon from "./Pokemon"

const PokemonList = () => {
  const pokemons = useSelector(state => state.pokemons)
  const caughted = useSelector(state => state.caughtedPokemons)
  return (
    <div className="pokemons-list">
      {pokemons.map(pokemon => {
        return <Pokemon 
          key={pokemon.id} 
          pokemon={pokemon}
           />
      })}
    </div>
  )
}

export default PokemonList;
