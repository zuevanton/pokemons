const PokemonCounter = ({caughted, total}) => {

  return (
    <>
      <h2>Поймано покемонов</h2>
      <h3>{caughted} / {total}</h3>
    </>
  )
}

export default PokemonCounter;