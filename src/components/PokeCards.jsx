import React from "react";
import PokeCard from "./PokeCard";
import { mockPokemonsData } from "../mock/pokeData";

export default class PokeCards extends React.Component {
  render() {
    return mockPokemonsData
      .sort((a, b) => (a.value - b.value ? 1 : -1)) //I did it descending because data is already ascending
      .map((value, i) => {
        let imgSrc = value.sprites;
        let imgLink = (obj, index) => {
          return obj[Object.keys(obj)[index]];
        };

        let props = {
          index: i,
          name: value.name,
          imgEnterSrc: imgLink(imgSrc, 0),
          imgOverSrc: imgLink(imgSrc, 1),
          videoLink: value.videoLink
        };

        return <PokeCard {...props} />;
      });
  }
}
