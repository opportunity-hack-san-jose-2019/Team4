import React from "react";

export default function Incident(props) {
  return (
    <div className="Incident">
      <h1>{props.name}</h1>
      <h3>{props.location}</h3>
      <img src={require(`../images/${props.image}.jpg`)} />
      <p>{props.priority}</p>
    </div>
  );
}
