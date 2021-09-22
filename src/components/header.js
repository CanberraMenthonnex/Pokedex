import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"

export function Header() {
    return (
        <>
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
                <Link className="App-link blue" to="/">Accueil</Link>
                <Link className="App-link blue" to="list">Liste des Pokemon</Link>
            </nav>
        </>

    )
}