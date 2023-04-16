import React, { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${
          import.meta.env.VITE_REACT_APP_API_URL
        }/weather/?lat=${lat}&lon=${long}&units=metric&appid=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <>
      <Card weatherData={data} />
    </>
  );
}
export default App;
