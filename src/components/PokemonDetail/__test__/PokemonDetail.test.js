import React from "react";
import renderer from "react-test-renderer";
import { MockedProvider } from "@apollo/react-testing";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { POKEMON_DETAIL, PokemonDetail } from "../index";

describe("PokemonList", () => {
  const mocks = [
    {
      request: {
        query: POKEMON_DETAIL,
        variables: {
          id: "UG9rZW1vbjowMjU="
        }
      },
      result: {
        data: {
          pokemon: {
            id: "UG9rZW1vbjowMjU=",
            name: "Pikachu",
            types: ["Electric"],
            resistant: ["Electric", "Flying", "Steel"],
            image: "https://img.pokemondb.net/artwork/pikachu.jpg",
            weaknesses: ["Ground"],
            evolutions: [
              {
                id: "UG9rZW1vbjowMjY=",
                number: "026",
                name: "Raichu",
                image: "https://img.pokemondb.net/artwork/raichu.jpg"
              }
            ]
          }
        }
      }
    }
  ];

  it("render without error", () => {
    renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router>
          <Route path="/pokemon/abc">
            <PokemonDetail />
          </Route>
        </Router>
      </MockedProvider>
    );
  });
});
