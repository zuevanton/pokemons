import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider,  } from 'react-redux';
import { pokemonsReducer } from './store/pokemonsReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { caughtedPokemons } from './store/caughtedPokemons';
import { paginationReducer } from './store/paginationReducer';

const reducer = combineReducers({
    pokemons: pokemonsReducer,
    caughtedPokemons: caughtedPokemons,
    pagination: paginationReducer
})

const thunkMiddlware = storeApi => next => action => {
    if (typeof action === "function") {
        action(storeApi.dispatch);
    } else {
        next(action);
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddlware))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
