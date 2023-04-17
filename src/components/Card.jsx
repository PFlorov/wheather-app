import React from "react";
import { Button } from "semantic-ui-react";
import moment from "moment";
import "../styles/styles.css";

const refreshButton = () => {
  window.location.reload();
};

const CardComponent = ({ weatherData }) => (
  <div className="main">
    <div className="top">
      <p className="header">{weatherData.name}</p>
      <Button
        className="button"
        inverted
        color="blue"
        circular
        icon="refresh"
        onClick={refreshButton}
      />
    </div>
    <div className="flex">
      <p className="day">
        {moment().format("dddd")}, <span>{moment().format("LL")}</span>
      </p>
      <p className="description">{weatherData.weather[0].main}</p>
    </div>

    <div className="flex">
      {weatherData && weatherData.main && (
        <p>Temperature: {weatherData.main.temp} &deg;C</p>
      )}

      {weatherData && weatherData.main && (
        <p>Humidity: {weatherData.main.humidity} %</p>
      )}
    </div>

    <div className="flex">
      {weatherData && weatherData.sys && (
        <p>
          Sunrise:
          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
        </p>
      )}

      {weatherData && weatherData.sys && (
        <p>
          Sunset:
          {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}
        </p>
      )}
    </div>
  </div>
);

export default CardComponent;
