import React from "react";

export default function PokeCard(props) {
  return (
    <div key={props.index}>
      <h1>{props.name}</h1>
      <a target="_blank" rel="noreferrer" href={props.videoLink}>
        <img
          alt={props.name}
          src={props.imgEnterSrc}
          onMouseOver={(e) => (e.currentTarget.src = props.imgOverSrc)}
          onMouseOut={(e) => (e.currentTarget.src = props.imgEnterSrc)}
        />
      </a>
    </div>
  );
}
