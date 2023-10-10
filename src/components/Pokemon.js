import {memo} from "react";

const Pokemon = ({pokemon, onPokemonChangeStatus, status}) => {
  const {name, id} = pokemon;

  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  const className = `pokemon-item ${status ? 'caughted' : ''}`

  const onButtonClick = (id) => {
    onPokemonChangeStatus(id)
  }

  return (
    <div className={className}>
      <h4>{name} #{id}</h4>
      <img src={src} alt={name} />
      <button onClick={() => onButtonClick(id)}>{status ? 'отпустить' : 'поймать'}</button>
    </div>
  )
}
export default memo(Pokemon);