import axios from "axios";
import React, { useEffect, useState } from "react";
import GoogleMap from "./GoogleMap";
import { Container } from "@material-ui/core";

export default function Get() {
  // State
  const [coo, setCoo] = useState([{}]);

  const url =
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";

  // Axios
  function fetchData() {
    axios.get(url).then(
      response => {
        const data = response.data;

        /**
         * Getting the size of the array
         */
        const count = data.metadata.count;

        const cooArray = [];

        /**
         * Pushing the data in an array to make them
         * accessable
         */
        for (let i = 0; i < count; i++) {
          cooArray[i] = {
            key: data.features[i].id,
            geoType: data.features[i].geometry.type,
            longitude: data.features[i].geometry.coordinates[0],
            latitude: data.features[i].geometry.coordinates[1],
            elevation: data.features[i].geometry.coordinates[2],
            properties: data.features[i].properties
          };
        }

        /**
         * Setting the array with the data in the state
         */
        setCoo(cooArray);
      },
      error => {
        console.log(error);
      }
    );
  }

  // Fetching Data using axios
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container fixed>
      <h1>Get</h1>

      <div className="Map-size">
        <GoogleMap coordinates={coo} />
      </div>
    </Container>
  );
}
