import React, { Component } from "react";

import Incident from "./Incident";

export class Incidents extends Component {
  state = {
    incidents: [
      {
        id: 1,
        name: "Wildfire destroys over 100 houses",
        location: "San Jose, CA",
        description:
          "Mr Chesky said Airbnb would create a dedicated 'party house' rapid response team and expand manual screening of high-risk reservations. The company, which is expected to float on the stock market in 2020, would also take action against users who violated its policies, he said.",
        category: "Natural Disaster",
        image: "wildfire",
        priority: "high",
        donation: "$1,355",
        volunteers: "105"
      },
      {
        id: 2,
        name: "Flooding caused by gargabe",
        location: "San Francisco, CA",
        description:
          "Mr Chesky said Airbnb would create a dedicated 'party house' rapid response team and expand manual screening of high-risk reservations. The company, which is expected to float on the stock market in 2020, would also take action against users who violated its policies, he said.",
        category: "Natural Disaster",
        image: "flooding",
        priority: "medium",
        donation: "$1,610",
        volunteers: "187"
      },
      {
        id: 3,
        name: "Homeless people needing clothes",
        location: "Sunnyvale, CA",
        description:
          "Mr Chesky said Airbnb would create a dedicated 'party house' rapid response team and expand manual screening of high-risk reservations. The company, which is expected to float on the stock market in 2020, would also take action against users who violated its policies, he said.",
        category: "Humanity",
        image: "homeless",
        priority: "low",
        donation: "$823",
        volunteers: "65"
      }
    ]
  };

  render() {
    return (
      <div className="Incidents">
        <h1>Incidents</h1>
        {this.state.incidents.map(el => (
          <Incident incident={el} />
        ))}
      </div>
    );
  }
}

export default Incidents;
