import React, { useState } from "react";

export default function Incident(props) {
  const [voluntering, setVoluntering] = useState(false);
  const [num, setNum] = useState(props.incident.current_volunteer);

  const onVolunteer = () => {
    setVoluntering(true);
    setNum(parseInt(num, 10) + 1);
  };

  return (
    <div className="Incident">
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
          <p>{props.incident.current_donation}</p>
          <button>Donate</button>
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
