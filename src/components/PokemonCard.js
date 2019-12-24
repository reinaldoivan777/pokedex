import React, { Fragment } from "react";
import { Card, Image, Grid, Label } from "semantic-ui-react";

const PokemonCard = ({ pokemon: { name, id, number, image, types } }) => {
  return (
    <Fragment>
      <Grid.Column>
        <Card>
          <Image src={image} wrapped size="small" centered />
          <Card.Content>
            <Card.Header>{`${number} --- ${name}`}</Card.Header>
            <Card.Description>
              {types.map(type => (
                <Label as="a" color="teal" key={type}>
                  {type}
                </Label>
              ))}
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Fragment>
  );
};

export default PokemonCard;
