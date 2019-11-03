import React, { useState } from "react";
import Popup from "./Popup";

export default function Incident(props) {
  const [voluntering, setVoluntering] = useState(false);
<<<<<<< HEAD
  const [num, setNum] = useState(props.incident.volunteers);
  const [donate, setDonate] = useState(false);
  const [donation, setDonation] = useState(props.incident.donation);
=======
  const [num, setNum] = useState(props.incident.current_volunteer);
>>>>>>> Wroking back end

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
      {donate && (
        // <div className="donate-popup">
        //   <div className="popped">
        //     <img src={require("../images/paypal.png")} />
        //   </div>
        // </div>
        <Popup sendData={getData} />
      )}
      <img
        className="priority-img"
        src={require(`../images/${props.incident.priority}`)}
      />
      <h1>{props.incident.title}</h1>
      <br />
      <img className="location-img" src={require("../images/location.png")} />
      <h3>{props.incident.location}</h3>
      <img
        className="incident-img"
        src={require(`../images/${props.incident.image}`)}
      />
      <button className="category">{props.incident.tag}</button>
      <div className="posted-by">
        <img
          className="creator-img"
          src={require(`../images/${props.incident.creater_image}`)}
        />
        <p>
          Published by <br />
          <span>{props.incident.creater}</span>
        </p>
      </div>
      <p className="description">{props.incident.description}</p>
      <div className="actions">
        <div className="action-donate">
          <img src={require("../images/donate.png")} />
<<<<<<< HEAD
          {/* <p>{props.incident.donation}</p> */}
          <p>${donation}</p>
          <button onClick={() => onDonate()}>Donate</button>
          {/* <button>Donate</button> */}
=======
          <p>{props.incident.current_donation}</p>
          <button>Donate</button>
>>>>>>> Wroking back end
        </div>
        <div>
          <img src={require("../images/volunteer.png")} />
          <p>{num}</p>
          <button
            className={voluntering ? "registered" : ""}
            onClick={() => onVolunteer()}
          >
            {/* Can use /isVolunteering with  */}
            {voluntering ? "Registered" : "Volunteer"} 
          </button>
        </div>
      </div>
    </div>
  );
}
