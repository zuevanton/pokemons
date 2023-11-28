import pokemonsData from "../api/loadPokemons"

export const pokemonsReducer = (state = [], action) => {
  if(action.type === 'ADD_POKEMONS') {
    return action.pokemons
  } else {
    return state
  }
}
