import React, { Component } from "react";

import Incident from "./Incident";

export class Incidents extends Component {
  state = {
    incidents: [
      {
        id: 1,
        name: "Wildfire destroys over 100 houses",
        location: "San Jose, CA",
        image: "wildfire",
        priority: "High"
      },
      {
        id: 2,
        name: "Flooding caused by gargabe",
        location: "San Francisco, CA",
        image: "flooding",
        priority: "Medium"
      },
      {
        id: 3,
        name: "Homeless people needing clothes",
        location: "Sunnyvale, CA",
        image: "homeless",
        priority: "Low"
      }
    ]
  };

  render() {
    return (
      <div className="Incidents">
        <h1>Incidents</h1>
        {this.state.incidents.map(el => (
          <Incident
            name={el.name}
            location={el.location}
            image={el.image}
            priority={el.priority}
          />
        ))}
      </div>
    );
  }
}

export default Incidents;
