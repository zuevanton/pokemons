import pokemonsData from "../api/loadPokemons";

// thunk function
export const loadPokemons = (page, pageSize) => (dispatch) => {
  pokemonsData(page, pageSize).then(result => dispatch({type: 'ADD_POKEMONS', pokemons: result}))
}