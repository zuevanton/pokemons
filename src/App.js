import pokemonsData from './api/loadPokemons';
import PokemonCounter from './components/PokemonCounter';
import PokemonList from './components/PokemonList';
import NavigateButtons from './components/navigateButtons';
import './App.css';
import { useState, useCallback, useEffect } from 'react';
import PageSizeSelect from './components/PageSizeSelect';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [caughtedPokemons, setCaughtedPokemons] = useState([])
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(3)

  
  useEffect(() => {
    pokemonsData(page, pageSize).then(result => setPokemons(result))
  }, [page, pageSize]);

  const loadPrevPokemons = () => {
    setPage(prev => prev - 1)
  }

  const loadNextPokemons = () => {
    setPage(prev => prev + 1)
  }

  const onPokemonChangeStatus = useCallback( async id => {
    setCaughtedPokemons(prevCaughted => {
      if(prevCaughted.includes(id)) {
        return prevCaughted.filter(caughtedId => caughtedId !== id)
      } else {
        return [...prevCaughted, id]
      }
    })
  }, []);


  return (
    <div className="App">
      <h1>страница {page}</h1>
      <PokemonCounter caughted={caughtedPokemons.length} total={pokemons.length} />
      <PokemonList pokemons={pokemons} onPokemonChangeStatus={onPokemonChangeStatus} caughted={caughtedPokemons} />
      <NavigateButtons prev={loadPrevPokemons} next={loadNextPokemons} />
      <PageSizeSelect pageSize={pageSize} onChange={value => setPageSize(value)} />
    </div>
  );
}

export default App;
