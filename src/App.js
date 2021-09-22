import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { PokemonList } from './components/pokemonList';
import {Home} from './components/home';
import { Header } from './components/header';
import { useState, useEffect } from 'react';
import {getListPokemon, getDataPokemon} from './services/index';



function App() {
    
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/list">

          <PokemonList />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
