import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";

import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container>
          <div className="App">
            <Link to="/">
              <h1 className="my-3">POKEDEX</h1>
            </Link>

            <Route exact path="/" component={PokemonList} />
            <Route exact path="/pokemon/:id" component={PokemonDetail} />
          </div>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
