import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import { PokemonList } from './components/pokemonList';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="list">Liste de pokemons</Link>
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
