import React from "react";
import HelpIcon from "@material-ui/icons/Help";
import InfoIcon from "@material-ui/icons/Info";
import { Button, Tooltip } from "@material-ui/core";

export default function Header() {
  const helpText = `
    Hover over a marker to display its coordinates. 
    Click on a marker to display further details. 
    Every marker contains a button that will forward you to the homepage of the USGS to 
    provide you with further information. You can close a marker by clicking somewhere
    outside of the marker or by pressing the "ESC"-key on your keyboard. 
    
    May the force be with you!
    `;

  const infoText = `Click here to be forwarded to the GeoJSON Summary Format of USGS science for a changing world`;

  return (
    <div className="Header">
      <Button
        href="https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php"
        target="_blank"
      >
        <Tooltip title={infoText}>
          <InfoIcon className="Info-icon" />
        </Tooltip>
      </Button>
      <Tooltip title={helpText}>
        <HelpIcon className="Helper-icon" />
      </Tooltip>
    </div>
  );
}
