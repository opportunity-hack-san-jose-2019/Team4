import React, { Component } from "react";

import Incident from "./Incident";

export class Incidents extends Component {
  state = {
    showIncident: false,
    name: "",
    incidents: [],
    incidents2: [
      {
        id: 1,
        name: "Wildfire destroys over 100 houses",
        location: "San Jose, CA",
        description:
          "Mr Chesky said Airbnb would create a dedicated 'party house' rapid response team and expand manual screening of high-risk reservations. The company, which is expected to float on the stock market in 2020, would also take action against users who violated its policies, he said.",
        category: "Natural Disaster",
        image: "wildfire",
        priority: "high",
        postedby: "Elon Musk",
        postedimg: "elon",
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
        postedby: "Sri Shivananda",
        postedimg: "sri",
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
        postedby: "Chuck Robbins",
        postedimg: "chuck",
        donation: "$823",
        volunteers: "65"
      }
    ]
  };

  addIncident() {
    this.setState({
      showIncident: !this.state.showIncident
    });
  }

  showIncident() {
    return this.state.showIncident
      ? {
          height: "95%"
        }
      : { height: "0" };
  }

  publishIncident() {
    if (
      this.state.name &&
      this.state.location &&
      this.state.description &&
      this.state.priority &&
      this.state.category &&
      this.state.volunteers &&
      this.state.donation
    ) {
      let newIncident = {
        id: this.state.incidents.length + 1,
        name: this.state.name,
        location: this.state.location,
        description: this.state.description,
        category: this.state.category,
        image: "earthquake",
        priority: this.state.priority,
        postedby: "Gustavo Zapata",
        postedimg: "gustavo",
        donation: this.state.donation,
        volunteers: this.state.volunteers
      };
      this.setState({
        incidents: [...this.state.incidents, newIncident]
      });
      this.setState({
        name: "",
        location: "",
        description: "",
        category: "",
        priority: "",
        donation: "",
        volunteers: ""
      });
      this.addIncident();
    }
  }

  triggerInputFile = () => {
    this.fileInput.click();
  };

  handleTitle = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleLocation = e => {
    this.setState({
      location: e.target.value
    });
  };
  handleDescription = e => {
    this.setState({
      description: e.target.value
    });
  };
  handleCategory = e => {
    this.setState({
      category: e.target.value
    });
  };
  handlePriority = e => {
    this.setState({
      priority: e.target.value
    });
  };
  handleDonation = e => {
    this.setState({
      donation: e.target.value
    });
  };
  handleVolunteers = e => {
    this.setState({
      volunteers: e.target.value
    });
  };
  handleImage = fil => {
    console.log(fil);
  };

  componentDidMount = async () => {
    const response = await fetch('http://localhost:3001/getIncidents');
    const myJson = await response.json();
    // console.log(JSON.stringify(myJson));
    this.setState({
      incidents: [...myJson]
    })
  }

  render() {
    return (
      <div className="Incidents">
        <h1 onClick={() => this.fetchData()}>Incidents</h1>
        <span id="add" onClick={() => this.addIncident()}>
          <p
            style={
              this.state.showIncident
                ? { transform: "rotate(45deg)" }
                : { transform: "rotate(0deg)" }
            }
          >
            +
          </p>
        </span>
        {this.state.incidents.map(el => (
          <Incident incident={el} key={el.id} />
        ))}

        <article style={this.showIncident()}>
          <h2>PUBLISH INCIDENT</h2>
          <div className="form">
            <div>
              <p>What is the incident?</p>
              <input
                placeholder="E.g. Wildfire"
                onChange={this.handleTitle}
                value={this.state.name}
                required
              />
              <br />
              <p>Location</p>
              <input
                placeholder="E.g. San Jose"
                onChange={this.handleLocation}
                value={this.state.location}
                required
              />
              <br />
              <p>Priority</p>
              <select
                onChange={this.handlePriority}
                value={this.state.priority}
                required
              >
                <option disabled selected>
                  --- Select Priority ---
                </option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <p>Category</p>
              <select
                onChange={this.handleCategory}
                value={this.state.category}
                required
              >
                <option disabled selected>
                  --- Select Category ---
                </option>
                <option value="Natural Disaster">Natural Disaster</option>
                <option value="Humanitary">Humanitary</option>
                <option value="Animals">Animals</option>
                <option value="Homeless">Homeless</option>
              </select>
              <br />
              <p>Description</p>
              <textarea
                placeholder="E.g. An extreme wildfire is taking over LA..."
                onChange={this.handleDescription}
                value={this.state.description}
                required
              ></textarea>
              <div className="donation-volunteer">
                Donation:{" "}
                <input
                  placeholder="E.g. $900"
                  onChange={this.handleDonation}
                  value={this.state.donation}
                  required
                />
                <span>----</span>
                Volunteers:{" "}
                <input
                  placeholder="E.g. 100"
                  onChange={this.handleVolunteers}
                  value={this.state.volunteers}
                  required
                />
                <input
                  type="file"
                  hidden
                  ref={fileInput => (this.fileInput = fileInput)}
                  onChange={() => this.handleImage(this)}
                />
                <img
                  id="upload"
                  src={require("../images/camera.png")}
                  onClick={this.triggerInputFile}
                />
              </div>
              <br />
            </div>
          </div>
          <button id="publish" onClick={() => this.publishIncident()}>
            Publish
          </button>
        </article>
      </div>
    );
  }
}

export default Incidents;
