import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import Evolutions from "../index";

describe("Evolutions", () => {
  it("render without error", () => {
    const datas = [
      {
        id: "UG9rZW1vbjowMDI=",
        name: "Ivysaur",
        number: "002",
        image: "https://img.pokemondb.net/artwork/ivysaur.jpg"
      },
      {
        id: "UG9rZW1vbjowMDM=",
        name: "Venusaur",
        number: "003",
        image: "https://img.pokemondb.net/artwork/venusaur.jpg"
      }
    ];
    renderer.create(
      <Router>
        <Evolutions datas={datas} />
      </Router>
    );
  });

  it("empty data", () => {
    renderer.create(
      <Router>
        <Evolutions datas={[]} />
      </Router>
    );
  });

  it("data null", () => {
    renderer.create(
      <Router>
        <Evolutions datas={null} />
      </Router>
    );
  });

  it("snapshot renders", () => {
    const datas = [
      {
        id: "UG9rZW1vbjowMDI=",
        name: "Ivysaur",
        number: "002",
        image: "https://img.pokemondb.net/artwork/ivysaur.jpg"
      },
      {
        id: "UG9rZW1vbjowMDM=",
        name: "Venusaur",
        number: "003",
        image: "https://img.pokemondb.net/artwork/venusaur.jpg"
      }
    ];
    const component = renderer.create(
      <Router>
        <Evolutions datas={datas} />
      </Router>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
