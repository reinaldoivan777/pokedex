import React from "react";
import renderer from "react-test-renderer";
import { MockedProvider } from "@apollo/react-testing";
import { POKEMON_LIST_QUERY, PokemonList } from "../index";

describe("PokemonList", () => {
  const mocks = [
    {
      request: {
        query: POKEMON_LIST_QUERY,
        variables: {
          fetchNumber: 2,
          searchByName: ""
        }
      },
      result: {
        data: {
          pokemons: [
            {
              name: "Bulbasaur",
              types: ["Grass", "Poison"],
              id: "UG9rZW1vbjowMDE=",
              number: "001",
              image: "https://img.pokemondb.net/artwork/bulbasaur.jpg"
            },
            {
              name: "Ivysaur",
              types: ["Grass", "Poison"],
              id: "UG9rZW1vbjowMDI=",
              number: "002",
              image: "https://img.pokemondb.net/artwork/ivysaur.jpg"
            }
          ]
        }
      }
    }
  ];

  it("render without error", () => {
    renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PokemonList />
      </MockedProvider>
    );
  });

  //   it("empty data", () => {
  //     renderer.create(
  //       <Router>
  //         <PokemonList datas={[]} />
  //       </Router>
  //     );
  //   });

  //   it("data null", () => {
  //     renderer.create(
  //       <Router>
  //         <PokemonList datas={null} />
  //       </Router>
  //     );
  //   });

  //   it("snapshot renders", () => {
  //     const component = renderer.create(
  //       <Router>
  //         <PokemonList datas={datas} />
  //       </Router>
  //     );
  //     let tree = component.toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
});
