import React from "react";
import WeatherCard from "./utils/weatherCard";

const WeatherGrid = props => {
  const { week } = props;
  return (
    <div className="row">
      {/* <WeatherCard className="col" /> */}
      {week.map(e => {
        return (
          <WeatherCard
            className="col"
            day={e.day}
            high={e.high}
            low={e.low}
            cast={e.cast}
            key={Math.random() * 9}
          />
        );
      })}
    </div>
  );
};

export default WeatherGrid;
