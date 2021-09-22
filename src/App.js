import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import { PokemonList } from './components/pokemonList';
import { useState, useEffect } from 'react';
import {getListPokemon, getDataPokemon} from './services/index';


function App() {
    
  return (
    <Router>
      <div class="circle-container">
        <div class="circle red"></div>
        <div class="circle yellow"></div>
        <div class="circle green"></div>
      </div>
      
      <div class="h1-containter">
        <div class="circleBigCircle white">
          <div class="bigCircle blue"></div>
        </div>
        <h1>Pokedex</h1>
      </div>
      
      <nav>
        <Link class="App-link" to="/">Accueil</Link>
        <Link class="App-link" to="list">Liste de pokemons</Link>
      </nav>

      <Switch>
        <Route path="/list">

          <PokemonList />
        </Route>
        <Route>
          <div class="img-container">
            <img src="pika.png" alt="pikachu"/>
            <div>
              This application allows the user to search for some data about a Pokemon thanks to the Poke Api

              The application uses Poke API because it provides a lot of useful informations about pokemons.

              The application is based on React library in order to have a reactive app without coding too many processes (like state system, UI auto-update ...)
            </div>
            <img src="pokeball.png" alt="pokeball"/>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
