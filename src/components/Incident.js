import React, { useState } from "react";
import Popup from "./Popup";

export default function Incident(props) {
  const [voluntering, setVoluntering] = useState(false);
  const [num, setNum] = useState(props.incident.volunteers);
  const [donate, setDonate] = useState(false);
  const [donation, setDonation] = useState(props.incident.donation);

  const onVolunteer = () => {
    setVoluntering(true);
    setNum(parseInt(num, 10) + 1);
  };

  const onDonate = () => {
    setDonate(true);
  };

  const getData = value => {
    setDonation(parseInt(value, 10) + parseInt(donation, 10));
  };

  return (
    <div className="Incident">
      {donate && <Popup sendData={getData} />}
      <img
        className="priority-img"
        alt="priority icon"
        src={require(`../images/${props.incident.priority}.png`)}
      />
      <h1>{props.incident.name}</h1>
      <br />
      <img
        className="location-img"
        src={require("../images/location.png")}
        alt="location icon"
      />
      <h3>{props.incident.location}</h3>
      <img
        className="incident-img"
        src={require(`../images/${props.incident.image}.jpg`)}
        alt="indicent icon"
      />
      <button className="category">{props.incident.category}</button>
      <div className="posted-by">
        <img
          className="creator-img"
          alt="published by"
          src={require(`../images/${props.incident.postedimg}.jpeg`)}
        />
        <p>
          Published by <br />
          <span>{props.incident.postedby}</span>
        </p>
      </div>
      <p className="description">{props.incident.description}</p>
      <div className="actions">
        <div className="action-donate">
          <img src={require("../images/donate.png")} alt="donate icon" />
          <p>${donation}</p>
          <button onClick={() => onDonate()}>Donate</button>
        </div>
        <div>
          <img src={require("../images/volunteer.png")} alt="volunteer icon" />
          <p>{num}</p>
          <button
            className={voluntering ? "registered" : ""}
            onClick={() => onVolunteer()}
          >
            {voluntering ? "Registered" : "Volunteer"}
          </button>
        </div>
      </div>
    </div>
  );
}
