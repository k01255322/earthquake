import { IconButton, Tooltip, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import RoomIcon from "@material-ui/icons/Room";
import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import CustomPopover from "./CustomPopover";

export default function Map(props) {
  const [viewport, setViewport] = useState({
    latitude: 43.263,
    longitude: -2.935,
    width: "90vw",
    height: "60vh",
    zoom: 1
  });
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const MAPBOX_API_KEY =
    "pk.eyJ1Ijoia2xhbXRvYiIsImEiOiJjazRsbXoycXcwM285M25taDY2bTIwYzFwIn0.8CwbwP5JCe3I-CXAJtYkpQ";

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
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_API_KEY}
        mapStyle="mapbox://styles/klamtob/ck4n0zt603vq51clwbl57yg56"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {props.data.map(item =>
          item.latitude == null || item.longitude == null ? (
            <div>
              <CircularProgress className="Loading-spinner" />
              <Typography style={{ color: "black" }}>Loading data</Typography>
            </div>
          ) : (
            <Marker latitude={item.latitude} longitude={item.longitude}>
              <Tooltip
                title={"Lat: " + item.latitude + " Lng: " + item.longitude}
              >
                <IconButton
                  onClick={e => {
                    e.preventDefault();
                    setSelectedLocation(item);
                    handleClick(item.key);
                  }}
                >
                  <RoomIcon className="Markup-icon" />
                </IconButton>
              </Tooltip>
            </Marker>
          )
        )}

        {selectedLocation ? (
          <CustomPopover
            id={id}
            open={open}
            onClose={handleClose}
            data={selectedLocation}
          />
        ) : null}
      </ReactMapGL>
    </div>
  );
}
