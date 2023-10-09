import pokemonsData from './api/loadPokemons';
import PokemonCounter from './components/PokemonCounter';
import PokemonList from './components/PokemonList';
import './App.css';
import { useState, useCallback, useEffect } from 'react';

// const data1 = data.slice(0, 4);

function App() {
  console.log("🎨 App")

  const [pokemons, setPokemons] = useState([]);
  const [caughtedPokemons, setCaughtedPokemons] = useState([])
  const [page, setPage] = useState(1)

  
  useEffect(() => {
    pokemonsData(page, 5).then(result => setPokemons(result))
  }, [page]);

  const loadPrevPokemons = () => {
    setPage(prev => prev - 1)
    // loadPokemons(page)
  }

  const loadNextPokemons = () => {
    setPage(prev => prev + 1)
    // loadPokemons(page)
  }

  const onPokemonChangeStatus = useCallback( async id => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    setCaughtedPokemons(prevCaughted => {
      if(prevCaughted.includes(id)) {
        return prevCaughted.filter(caughtedId => caughtedId !== id)
      } else {
        return [...prevCaughted, id]
      }
    })
  }, []);

  // const onPokemonChangeStatusCached = useCallback(onPokemonChangeStatus, []);

  return (
    <div className="App">
      <h1>страница {page}</h1>
      <PokemonCounter caughted={caughtedPokemons.length} total={pokemons.length} />
      <PokemonList pokemons={pokemons} onPokemonChangeStatus={onPokemonChangeStatus} caughted={caughtedPokemons} />
      <button onClick={loadPrevPokemons}>назад</button>
      <button onClick={loadNextPokemons}>вперед</button>
    </div>
  );
}

export default App;

// сделать селект с выбором кол-ва покемонов на странице. пн в 20:30