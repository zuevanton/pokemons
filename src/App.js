import PokemonCounter from './components/PokemonCounter';
import PokemonList from './components/PokemonList';
import NavigateButtons from './components/navigateButtons';
import './App.css';
import { useEffect } from 'react';
import PageSizeSelect from './components/PageSizeSelect';
import { useDispatch, useSelector } from 'react-redux';
import { loadPokemons } from './store/loadPokemons';



function App() {
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.pokemons)
  const caughtedPokemons = useSelector(state => state.caughtedPokemons)
  const {page, pageSize} = useSelector(state => state.pagination)
  
  useEffect(() => {
    dispatch(loadPokemons(page, pageSize))
  }, [page, pageSize]);

  return (
    <div className="App">
      <h1>страница {page}</h1>
      <PokemonCounter />
      <PokemonList />
      <NavigateButtons />
      <PageSizeSelect pageSize={pageSize} onChange={value => dispatch({type: 'CHANGE_PAGESIZE', pageSize: value})} />
    </div>
  );
}

export default App;
