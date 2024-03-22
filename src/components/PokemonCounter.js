import { useSelector } from "react-redux";

const PokemonCounter = () => {
  const caughted = useSelector(state => state.caughtedPokemons).length
  const total = useSelector(state => state.pokemons).length
  return (
    <>
      <h2>Поймано покемонов</h2>
      <h3>{caughted} / {total}</h3>
    </>
  )
}

export default PokemonCounter;