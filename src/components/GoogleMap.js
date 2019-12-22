import React from "react";
import GoogleMapReact from "google-map-react";
import Markup from "./Markup";

export default function GoogleMap(props) {
  const defaultProps = {
    center: {
      lat: 43.263,
      lng: -2.935
    },
    zoom: 1,
    apiKey: "AIzaSyDlUSNOt4Sv-eXRkda53M6Wddi_Vp4rZSY"
  };

  return (
    <div className="Map-size">
      <GoogleMapReact
        bootstrapURLKeys={{ key: defaultProps.apiKey }}
        center={defaultProps.center}
        zoom={defaultProps.zoom}
      >
        {props.coordinates.map(item => {
          return (
            <Markup id={item.key} lat={item.latitude} lng={item.longitude} />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
