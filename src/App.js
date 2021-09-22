import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import { PokemonList } from './components/pokemonList';
import { useState, useEffect } from 'react';
import {getListPokemon, getDataPokemon} from './services/index';


function App() {

    const [post, setPost] = useState();


    useEffect(() => {
        getListPokemon(0,10).then((response) => {            
            return Promise.all(response.data.results.map(pokemon => getDataPokemon(pokemon.url).then(data => data.data)))            
        }).then(pokemons => setPost(pokemons));
    }, []);

    console.log(post);
    
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="list">Liste de Pokemon</Link>
      </nav>

      <Switch>
        <Route path="/list">

          <PokemonList />
        </Route>
        <Route>
          <div>
            Home
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
