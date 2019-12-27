import React, { useEffect, useState } from "react";
import ReactMapboxGl, {
  Layer,
  Feature,
  ZoomControl,
  ScaleControl
} from "react-mapbox-gl";
import CustomPopover from "./CustomPopover";

const Map = ReactMapboxGl({
  boxZoom: 1,
  accessToken:
    "pk.eyJ1Ijoia2xhbXRvYiIsImEiOiJjazRsbXoycXcwM285M25taDY2bTIwYzFwIn0.8CwbwP5JCe3I-CXAJtYkpQ"
});

export default function Mapbox(props) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [zoom, setZoom] = useState([1]);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // Implementing a key listener to close Popovers
  useEffect(() => {
    // Close Popover with the ESC key
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedLocation(null);
      }
    };
    window.addEventListener("keydown", listener);

    // Clean-up
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  // eventHandler to set the Popover anchor
  const handleClick = item => {
    setAnchorEl(item);
  };

  // eventHandler to close the Popover
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Map
      style="mapbox://styles/klamtob/ck4oaqdrx26gr1ct8p9nr55ua"
      containerStyle={{
        height: "70vh",
        width: "90vw"
      }}
      zoom={zoom}
    >
      <ZoomControl />
      <ScaleControl
        position="top-left"
        measurement="km"
        style={{ color: "black" }}
      />

      <Layer type="symbol" id="marker" layout={{ "icon-image": "embassy-15" }}>
        {props.data.map(item => {
          return (
            <Feature
              coordinates={[item.longitude, item.latitude]}
              onClick={() => {
                setSelectedLocation(item);
                handleClick(item.key);
              }}
            />
          );
        })}
      </Layer>
      {selectedLocation ? (
        <CustomPopover
          id={id}
          open={open}
          onClose={handleClose}
          data={selectedLocation}
        />
      ) : null}
    </Map>
  );
}
