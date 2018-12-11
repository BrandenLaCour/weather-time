import React from "react";
import clear from "./clear.png";
import cloudy from "./cloudy.png";
import partlyCloudy from "./partlyCloudy.png";
import rain from "./rain.png";
import snow from "./snow.png";
import windy from "./windy.png";
import fog from "./fog.png";

const WeatherCard = ({ day, high, low, cast }) => {
  const card = {
    width: "17rem",
    border: "none"
  };

  const foreCast = [
    { display: "Pt.Cloudy", name: "partly-cloudy-day", url: partlyCloudy },
    { display: "Pt.Cloudy", name: "partly-cloudy-night", url: partlyCloudy },
    { display: "Clear", name: "clear-day", url: clear },
    { display: "Rain", name: "rain", url: rain },
    { display: "Windy", name: "wind", url: windy },
    { display: "Cloudy", name: "cloudy", url: cloudy },
    { display: "Snow", name: "snow", url: snow },
    {
      display: "Fog",
      name: "fog",
      url: fog
    }
  ];

  let castInd = foreCast.filter(e => e.name === cast);

  //catch block if a type of forecast is not part of the app yet
  if (castInd[0] === undefined) {
    castInd = [
      { display: "error", name: "error", url: "https://bit.ly/2ynaBgj" }
    ];
    console.log(`"${cast}" is not part of the directory`);
  }

  return (
    <div className="card" id="c1" style={card}>
      <div className="container">
        <img src={castInd[0].url} alt="" className="pic" />
        <div className="card-body" id="test">
          <h3 className="card-title">{day}</h3>
          <h6 className="card-subtitle mb-2 text-muted">
            {castInd[0].display}
          </h6>
          <div className="row">
            <h5 className="col-sm-6">High: {high}</h5>
            <h5 className="col-sm-6">Low: {low}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
