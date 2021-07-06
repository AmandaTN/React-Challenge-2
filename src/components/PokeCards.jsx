import React from "react";
import { mockPokemonsData } from "../mock/pokeData";

export default class PokeCard extends React.Component {
  render() {
    return mockPokemonsData.map((value, i) => {
      return (
        <div key={i}>
          <h1>{value.name}</h1>
          <a target="_blank" src={value.video}>
            <img
              src={value.sprites.front_default}
              onMouseOver={(e) =>
                (e.currentTarget.src = Object.keys(value.sprites)[0])
              }
              onMouseOut={(e) =>
                (e.currentTarget.src = value.sprites.front_default)
              }
            />
          </a>
        </div>
      );
    });
  }
}
