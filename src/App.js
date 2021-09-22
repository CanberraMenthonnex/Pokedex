import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { PokemonList } from './components/pokemonList';
import { PokemonFooter } from './components/pokemonFooter';
import {Home} from './components/home';
import { Header } from './components/header';



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
      <PokemonFooter />
    </Router>
  );
}

export default App;
