import { Container } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Mapbox from "./Mapbox";

export default function Get() {
  const [data, setData] = useState([{}]);

  const url =
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";

  // Fetching data with axios
  function fetchData() {
    axios.get(url).then(
      response => {
        const data = response.data;

        const dataArray = [];
        // Storing the size of the array
        const count = data.metadata.count;

        /**
         * Pushing the data in an array to make them
         * accessable
         */

        for (let i = 0; i < count; i++) {
          // Convert Unix Time Stamp to UTC String
          const t = new Date(data.features[i].properties.time);
          const formattedTime = t.toUTCString("dd.mm.yyyy hh:MM:ss");
          const tu = new Date(data.features[i].properties.updated);
          const formattedUpdateTime = tu.toUTCString("dd.mm.yyyy hh:MM:ss");

          dataArray[i] = {
            key: data.features[i].id,
            // coordinates
            geoType: data.features[i].geometry.type,
            longitude: data.features[i].geometry.coordinates[0],
            latitude: data.features[i].geometry.coordinates[1],
            elevation: data.features[i].geometry.coordinates[2],
            // properties
            mag: data.features[i].properties.mag,
            place: data.features[i].properties.place,
            time: formattedTime,
            updated: formattedUpdateTime,
            tz: data.features[i].properties.tz / 60,
            url: data.features[i].properties.url,
            detail: data.features[i].properties.detail,
            status: data.features[i].properties.status,
            alert: data.features[i].properties.alert,
            felt: data.features[i].properties.felt,
            tsunami: data.features[i].properties.tsunami,
            sig: data.features[i].properties.sig,
            net: data.features[i].properties.net,
            code: data.features[i].properties.code,
            ids: data.features[i].properties.ids,
            sources: data.features[i].properties.sources,
            types: data.features[i].properties.types,
            nst: data.features[i].properties.nst,
            dmin: data.features[i].properties.dmin,
            rms: data.features[i].properties.rms,
            gap: data.features[i].properties.gap,
            magType: data.features[i].properties.magType,
            type: data.features[i].properties.type,
            title: data.features[i].properties.title
          };
        }

        setData(dataArray);
      },
      error => {
        console.log(error);
      }
    );
  }

  // Calling the fetchData()-function when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Container maxWidth={false}>
        <Mapbox data={data} />
      </Container>
    </div>
  );
}
