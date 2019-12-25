import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Loading from "./common/Loading";
import Badges from "./common/Badges";

const POKEMON_DETAIL = gql`
  query PokemonDetail($id: String) {
    pokemon(id: $id) {
      name
      types
      resistant
      image
      weaknesses
      attacks {
        special {
          name
          type
          damage
        }
        fast {
          name
          type
          damage
        }
      }
      evolutions {
        id
        number
        name
        image
      }
    }
  }
`;

export class PokemonDetail extends Component {
  render() {
    let { id } = this.props.match.params;
    return (
      <Fragment>
        <Query query={POKEMON_DETAIL} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error) console.log(error);

            const { name, types, resistant, weaknesses, image } = data.pokemon;

            return (
              <div className="text-center my-3">
                <h1>{name}</h1>
                <img src={image} alt={name} className="image-profile" />
                <div>
                  Types: <Badges datas={types} variant="info" />
                </div>
                <div>
                  Resistant: <Badges datas={resistant} variant="secondary" />
                </div>
                <div>
                  Weaknesses: <Badges datas={weaknesses} variant="danger" />
                </div>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default PokemonDetail;
