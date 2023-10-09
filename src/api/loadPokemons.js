const pokemonsData = (pageNumber, pageSize) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pageNumber * pageSize - pageSize}&limit=${pageSize}`)
    .then(response => response.json())
    .then(result => result.results)
    .then(result => result.map(item => {
      return {
        id: item.url.slice(34).slice(0, -1),
        name: item.name
      }
    }))
}

export default pokemonsData