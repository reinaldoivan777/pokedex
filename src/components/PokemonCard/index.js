import React, { Fragment } from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";

import Badges from "../common/Badges";

const PokemonCard = ({ pokemon }) => {
  if (!pokemon || isEmpty(pokemon)) return null;
  const { name, id, number, image, types } = pokemon;
  return (
    <Fragment>
      <Col xs={12} sm={4} className="my-3">
        <Link to={`/pokemon/${id}`}>
          <Card className="card-home">
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{`${number} - ${name}`}</Card.Title>
              {types.length && <Badges datas={types} variant="info" />}
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </Fragment>
  );
};

export default PokemonCard;
