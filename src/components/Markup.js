import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";

export default function(props) {
  function onClick(props) {
    console.log(props);
  }

  return (
    <div>
      <Tooltip title={"Longitude: " + props.lng + "Latitude: " + props.lat}>
        <IconButton>
          <RoomIcon className="Markup-icon" onClick={() => onClick(props.id)} />
        </IconButton>
      </Tooltip>
    </div>
  );
}
