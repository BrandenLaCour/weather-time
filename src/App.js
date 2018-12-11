import React, { Component } from "react";
import WeatherGrid from "./components/weatherGrid";
import { currentWeek } from "./components/utils/currentWeek";
import Input from "./components/utils/input";
import "./App.css";
import axios from "axios";

// need to refractor a lot of code on this page into components. Mainly the axios calls.

class App extends Component {
  state = {
    // add routing to pick certain days, etc.
    // style with background images, etc.
    week: [
      { day: "", high: "", low: "", cast: "" },
      { day: "", high: "", low: "", cast: "" },
      { day: "", high: "", low: "", cast: "" },
      { day: "", high: "", low: "", cast: "" },
      { day: "", high: "", low: "", cast: "" },
      { day: "", high: "", low: "", cast: "" },
      { day: "", high: "", low: "", cast: "" }
    ],
    toggle: { show: true },
    location: { name: "Chicago", current: "41.8781,-87.6298" }
  };
  // refractor code to shorten this page, export to other components
  componentWillMount() {
    //creating the proper week layout depending on the day the app is rendered
    const newDate = new Date();
    const day = newDate.getDay();
    let oldWeek = [...this.state.week];
    const newWeek = currentWeek(day);
    const week = oldWeek.map((e, i) => {
      e.day = newWeek[i];
      e.high = "";
      e.low = "";
      e.cast = "partly-cloudy-day";
      return e;
    });

    this.setState({ week });
  }

  // get the default weather (chicago) from the api
  async componentDidMount() {
    const { data } = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/bab642085489d446f31df424bdf3e506/${
        this.state.location.current
      }`
    );
    console.log("cors worked");
    const { data: allDays } = data.daily;

    let week = [...this.state.week];
    //refractor to shorten code here
    const days = [
      allDays[0],
      allDays[1],
      allDays[2],
      allDays[3],
      allDays[4],
      allDays[5],
      allDays[6]
    ];

    const fiveDay = week.map((e, i) => {
      e.high = Math.round(days[i].apparentTemperatureMax);
      e.low = Math.round(days[i].apparentTemperatureMin);
      e.cast = days[i].icon;
      e.day = week[i].day;
      return e;
    });

    week = fiveDay;

    this.setState({ week });
  }

  handleToggle = () => {
    let toggle = { ...this.state.toggle };
    toggle.show = !toggle.show;

    this.setState({ toggle });
  };
  // switch the location to the designated area
  updateTest = async e => {
    const name = e.target.name;
    const { data } = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/bab642085489d446f31df424bdf3e506/${
        e.target.value
      }`
    );

    const { data: allDays } = data.daily;

    let week = [...this.state.week];
    //refractor to shorten code here
    const days = [
      allDays[0],
      allDays[1],
      allDays[2],
      allDays[3],
      allDays[4],
      allDays[5],
      allDays[6]
    ];

    const fiveDay = week.map((e, i) => {
      e.high = Math.round(days[i].apparentTemperatureMax);
      e.low = Math.round(days[i].apparentTemperatureMin);
      e.cast = days[i].icon;
      e.day = week[i].day;
      return e;
    });

    week = fiveDay;
    let location = { ...this.state.location };
    location.name = name;
    this.handleToggle();
    this.setState({ week, location });
  };

  render() {
    const { week, toggle, location } = this.state;

    return (
      <div id="background">
        <div className="row justify-content-center">
          <img src="https://bit.ly/2PPfHJ5" alt="" />
        </div>
        <Input
          toggle={toggle.show}
          click={this.handleToggle}
          loc={this.updateTest}
          label={location.name}
        />
        <WeatherGrid week={week} />
        <p>By Branden LaCour, Powered By Dark Sky.</p>
        <p>Currently under development</p>
        <a href="https://github.com/BrandenLaCour/weather-time">Github</a>
      </div>
    );
  }
}

export default App;
