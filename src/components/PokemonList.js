import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Row } from "react-bootstrap";
import { debounce } from "lodash";

import PokemonCard from "./PokemonCard";
import Loading from "./common/Loading";

const POKEMONS_LIST_QUERY = gql`
  query PokemonList($fetchNumber: Int!) {
    pokemons(first: $fetchNumber) {
      name
      id
      number
      image
      types
    }
  }
`;

export class PokemonList extends Component {
  constructor() {
    super();
    this.state = {
      fetchNumber: 30,
      firstLoad: true
    };
  }

  handleScroll = debounce(() => {
    const { fetchNumber } = this.state;
    let currentNumber = fetchNumber;
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      currentNumber += 15;
      this.setState({
        firstLoad: false,
        fetchNumber: currentNumber
      });
    }
  }, 100);

  componentDidMount = () =>
    window.addEventListener("scroll", this.handleScroll);

  componentWillUnmount = () =>
    window.removeEventListener("scroll", this.handleScroll);

  render() {
    const { fetchNumber, firstLoad } = this.state;
    return (
      <Fragment>
        <h1 className="my-3">POKEDEX</h1>
        <Query query={POKEMONS_LIST_QUERY} variables={{ fetchNumber }}>
          {({ loading, error, data }) => {
            if (loading && firstLoad) return <Loading />;
            if (error) console.log(error);

            return (
              <Fragment>
                <Row>
                  {data.pokemons.map((pokemon, index) => (
                    <PokemonCard pokemon={pokemon} key={index} />
                  ))}
                </Row>
                {loading && <Loading />}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default PokemonList;
