import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import PokemonCard from "../index";

describe("PokemonCard", () => {
  const data = {
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
    id: "UG9rZW1vbjowMDE=",
    number: "001",
    image: "https://img.pokemondb.net/artwork/bulbasaur.jpg"
  };
  it("render without error", () => {
    renderer.create(
      <Router>
        <PokemonCard pokemon={data} />
      </Router>
    );
  });

  it("empty data", () => {
    renderer.create(
      <Router>
        <PokemonCard pokemon={{}} />
      </Router>
    );
  });

  it("data null", () => {
    renderer.create(
      <Router>
        <PokemonCard pokemon={null} />
      </Router>
    );
  });

  it("snapshot renders", () => {
    const component = renderer.create(
      <Router>
        <PokemonCard pokemon={data} />
      </Router>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
