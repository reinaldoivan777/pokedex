import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Grid } from "semantic-ui-react";

import PokemonCard from "./PokemonCard";

const POKEMONS_LIST_QUERY = gql`
  query PokemonList {
    pokemons(first: 30) {
      name
      id
      number
      image
      types
    }
  }
`;

export class PokemonList extends Component {
  render() {
    return (
      <Fragment>
        <Query query={POKEMONS_LIST_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            return (
              <Grid stackable columns={3}>
                {data.pokemons.map((pokemon, index) => (
                  <PokemonCard pokemon={pokemon} key={index} />
                ))}
              </Grid>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default PokemonList;
