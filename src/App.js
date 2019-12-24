import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";

import PokemonList from "./components/PokemonList";

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container>
          <div className="App">
            <h1>POKEDEX</h1>
            <Route exact path="/" component={PokemonList} />
          </div>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
