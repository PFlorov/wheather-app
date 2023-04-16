import React from "react";
import { Card } from "semantic-ui-react";
import moment from "moment";

const CardComponent = ({ weatherData }) => (
  <Card>
    <Card.Content>
      <Card.Header className="header">{weatherData.name}</Card.Header>
      {weatherData && weatherData.main && (
        <p>Temperature: {weatherData.main.temp} &deg;C</p>
      )}
      {weatherData && weatherData.sys && (
        <p>
          Sunrise:{" "}
          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
        </p>
      )}
      {weatherData && weatherData.sys && (
        <p>
          Sunset:{" "}
          {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}
        </p>
      )}
      {weatherData && weatherData.clouds && (
        <p>Cloudiness: {weatherData.clouds.all} %</p>
      )}
      {weatherData && weatherData.main && (
        <p>Humidity: {weatherData.main.humidity} %</p>
      )}
      <p>Day: {moment().format("dddd")}</p>
      <p>Date: {moment().format("LL")}</p>
    </Card.Content>
  </Card>
);

export default CardComponent;
