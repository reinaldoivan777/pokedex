import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Card, ListGroup } from "react-bootstrap";

import Loading from "../common/Loading";
import Badges from "../common/Badges";
import Evolutions from "../Evolutions";

export const POKEMON_DETAIL = gql`
  query PokemonDetail($id: String) {
    pokemon(id: $id) {
      name
      types
      resistant
      image
      weaknesses
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

            const {
              name,
              types,
              resistant,
              weaknesses,
              image,
              evolutions
            } = data.pokemon;

            return (
              <div className="text-center my-3 pokemon-detail">
                <Card style={{ maxWidth: "30rem" }}>
                  <Card.Header>
                    <img src={image} alt={name} className="image-profile" />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div className="text-left">
                      <ListGroup>
                        <ListGroup.Item>
                          Types: <Badges datas={types} variant="info" />
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Resistant:{" "}
                          <Badges datas={resistant} variant="secondary" />
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Weaknesses:{" "}
                          <Badges datas={weaknesses} variant="danger" />
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                    {evolutions && (
                      <Fragment>
                        <div className="text-secondary my-2">Evolutions</div>
                        <Evolutions datas={evolutions} />
                      </Fragment>
                    )}
                  </Card.Body>
                </Card>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default PokemonDetail;
