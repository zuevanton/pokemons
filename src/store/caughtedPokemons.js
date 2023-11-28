export const caughtedPokemons = (state = [], action) => {
  if(action.type === "CHANGE_STATUS") {
    if(state.includes(action.id)) {
      return state.filter(caughtedId => caughtedId !== action.id)
    } else {
      return [...state, action.id]
    }
  }
  return state
}