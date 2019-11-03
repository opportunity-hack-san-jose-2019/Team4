import React, { Component } from "react";

import Incident from "./Incident";

export class Incidents extends Component {
  state = {
    showIncident: false,
    name: "",
    incidents: [
      {
        id: 1,
        name: "Farm burnt by wildfires",
        location: "San Jose, CA",
        description:
          "I am a farmer, and my farm has been me and my family’s life and only source of income. Things were going well for us when we had the farm, but these horrible fires in northern California have taken everything we own. Our farm has been completely burnt down, including all of our cattle and crop. Without this, there is no way I can sustain my family, especially now that my wife has had twins. I need help in order to get back on my feet, whether it is through donations, or volunteering, any help in order to grow my farm again, and be able to put food on the table for my family once again, will go a long way for us. Thank you for your help.",
        category: "Natural Disaster",
        image: "wildfire",
        priority: "high",
        postedby: "Elon Musk",
        postedimg: "elon",
        donation: "$15000",
        volunteers: "105"
      },
      {
        id: 2,
        name: "Blankets for the freezing homeless",
        location: "San Francisco, CA",
        description:
          "I live in San Francisco. Every morning I walk to work around 7:30 am and come back at 8 pm. With weather starting to get cold, and constant rain, I feel terrible seeing all of the homeless living on the streets, completely freezing, and with no one to help them. I am creating this initiative in order to ease the life of these homeless by buying and delivering them blankets. You can either donate money for the blankets, or help us distribute them.",
        category: "Homeless",
        image: "homeless",
        priority: "low",
        postedby: "Sri Shivananda",
        postedimg: "sri",
        donation: "$400",
        volunteers: "187"
      },
      {
        id: 3,
        name: "Help teaching unprivileged children in schools",
        location: "North Kennedy Tract, CA",
        description:
          "As the director of North Kennedy Tract Elementary school, it is my job to be teaching the children of the future. In an area like North Kennedy Tract, educating children is their only chance to have an education, and not end up in the streets. This is why as a community, we have a vital job to make sure this happens. The North Tract Elementary School however, is lacking serious funding for basic utensils, as well as a desperate need for teacher volunteers.",
        category: "Humanity",
        image: "education",
        priority: "medium",
        postedby: "Chuck Robbins",
        postedimg: "chuck",
        donation: "$1000",
        volunteers: "65"
      },
      {
        id: 4,
        name: "Cleaning up Alviso park",
        location: "Alviso Park, CA",
        description:
          "Whilst on my morning run around Alviso park, I was shocked to see how much plastic was thrown away and left around. We have to understand that leaving suck quantities of plastic in the water is incredibly harmless to our environment, with many fish dying because of it. I am therefore creating an initiative to clean up Alviso park. You can either donate money for the cleaning, or volunteer and come clean it with us. ",
        category: "environment",
        image: "water",
        priority: "low",
        postedby: "Gustavo Zapata",
        postedimg: "gustavo",
        donation: "$1000",
        volunteers: "65"
      },
      {
        id: 5,
        name: "Soup Kitchen for the homeless",
        location: "San Jose, CA",
        description:
          "Homelessness in the Bay Area is becoming and larger and larger problem, with San Jose being the 5th city in the United States with the highest population of Homeless. The soup kitchen is an incident that will be offering dinner to the homeless in San Jose. We will need both donations in order to fund the food, as well as volunteers who will help us distribute this food to the homeless of San Jose. ",
        category: "Homeless",
        image: "soupkitchen",
        priority: "low",
        postedby: "Andres Payne",
        postedimg: "andres",
        donation: "$1000",
        volunteers: "65"
      },
      {
        id: 6,
        name: "Sewa Family Case Management Services",
        location: "Bay Area, CA",
        description:
          "Sewa Family Case Management Service team is building a support network in the community. As a member of this network, you can help by providing your pro bono services or becoming a case volunteer, who can actually work in the field. Sewa encourages you to stay informed of our activities, asks you to become our advocate by passing on the word to motivate others and requests you to become our passionate volunteers, so that Sewa can dedicatedly provide services to the community. Donating money will help Sewa help with the following services: Severe Illness, Hospitalization & Health Care, Death & Bereavement, and Family Emergencies.",
        category: "Family",
        image: "family",
        priority: "low",
        postedby: "Moataz Hammouda",
        postedimg: "moa",
        donation: "$1000",
        volunteers: "65"
      },
      {
        id: 7,
        name: "Earthquake, house destroyed, need help rebuildings",
        location: "Los Banos, CA",
        description:
          "n the past few weeks, there have been various earthquakes around my neighbourhood which have completely destroyed my house, to a point where it is no longer liveable. My family and me are having to live in a motel in the meantime, while we think of what to do. We want to go back home but do not have neither the manpower nor the resources to repair our house. With this incident, we are hoping that someone will help us, either by donating money, or by volunteering to help us restore our house to a liveable standard. Any help will take us a very long way, and my family and me thank you for your help.",
        category: "Natural Disaster",
        image: "earthquake4",
        priority: "high",
        postedby: "Hamza Zizi",
        postedimg: "hamza",
        donation: "$1000",
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

  render() {
    return (
      <div className="Incidents">
        <h1>Incidents</h1>
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
