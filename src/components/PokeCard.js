import React from "react";
import { mockPokemonData } from "../mock/pokeData";

export default class PokeCard extends React.Component {
  render() {
    return (
      <div>
        <h1>{mockPokemonData.name}</h1>
        <img src={props.imgSrc} />
        <img src={mockPokemonData.sprites.front_shiny} />
        <br />
        <a href={mockPokemonData.video}>Click me</a>
      </div>
    );
  }
}
