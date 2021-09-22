import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import { PokemonList } from './components/pokemonList';
import { PokemonFooter } from './components/pokemonFooter';


function App() {
    
  return (
    <Router>
      <div className="circle-container">
        <div className="circle red"></div>
        <div className="circle yellow"></div>
        <div className="circle green"></div>
      </div>
      
      <div className="h1-containter">
        <div className="circleBigCircle white">
          <div className="bigCircle blue"></div>
        </div>
        <h1>Pokedex</h1>
      </div>
      
      <nav>
        <Link className="App-link" to="/">Accueil</Link>
        <Link className="App-link" to="list">Liste de pokemons</Link>
      </nav>

      <Switch>
        <Route path="/list">
          <PokemonList />
        </Route>
        <Route>
          <div className="img-container">
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
      <PokemonFooter />
    </Router>
  );
}

export default App;
