import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";

export default function CustomTooltip(props) {
  return (
    <Tooltip title={"Lat: " + props.lat + " Lng: " + props.lng}>
      <IconButton onClick={props.handleClick(props.key)}>
        <RoomIcon className="Markup-icon" />
      </IconButton>
    </Tooltip>
  );
}
