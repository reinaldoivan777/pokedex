import React, { Fragment } from "react";
import { Col, Card, Badge } from "react-bootstrap";

const PokemonCard = ({ pokemon: { name, id, number, image, types } }) => {
  return (
    <Fragment>
      <Col xs={12} sm={4} className="my-3">
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{`${number} - ${name}`}</Card.Title>
            {types.map(type => (
              <Badge className="mr-1" key={type} variant="primary">
                {type}
              </Badge>
            ))}
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

export default PokemonCard;
