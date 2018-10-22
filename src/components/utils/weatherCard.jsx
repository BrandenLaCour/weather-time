import React from "react";

const WeatherCard = ({ day, high, low, cast }) => {
  const card = {
    width: "17rem",
    border: 'none'
  };
  
  const foreCast = [
    { display: 'Pt.Cloudy', name: "partly-cloudy-day", url: "https://bit.ly/2ODZaex" },
    { display: 'Pt.Cloudy', name: "partly-cloudy-night", url: "https://bit.ly/2ODZaex" },
    { display: 'Clear', name: "clear-day", url: "https://bit.ly/2Po5XoX" },
    { display: 'Rain', name: "rain", url: "https://bit.ly/2yXwS3M" },
    { display: 'Windy', name: "wind", url: "https://bit.ly/2ynCa9y" },
    { display: 'Cloudy', name: "cloudy", url: "https://bit.ly/2OdiqiM" },
    { display: 'Snow', name: "snow", url: "https://bit.ly/2NXphYP" },
    { display: 'Fog', name: "fog", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7aKPb4Hbq1xXg_DOzQkQ-yK474kDTE0JBEUdPsjtoOIQEwS_OAw" }
  ];
 
  let castInd = foreCast.filter(e => e.name === cast);
  
  //catch block if a type of forecast is not part of the app yet
  if (castInd[0] === undefined){
    castInd = [{display: 'error', name: "error", url: 'https://bit.ly/2ynaBgj'}]
    console.log(`"${cast}" is not part of the directory`)
  }
 
  return (
    <div className="card" id="c1" style={card}>
      <div className="container">
        <img src={castInd[0].url} alt="" className="pic" />
        <div className="card-body" id="test">
          <h3 className="card-title">{day}</h3>
          <h6 className="card-subtitle mb-2 text-muted">{castInd[0].display}</h6>
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
