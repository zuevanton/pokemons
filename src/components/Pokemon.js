import {memo} from "react";
import { useDispatch, useSelector } from 'react-redux';

const Pokemon = ({ pokemon }) => {
  const {name, id} = pokemon;

  const dispatch = useDispatch()
  const status = useSelector(state => state.caughtedPokemons.includes(id))

  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  const className = `pokemon-item ${status ? 'caughted' : ''}`

  const onButtonClick = (id) => {
    dispatch({type: 'CHANGE_STATUS', id})
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