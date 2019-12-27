import React from "react";
import HelpIcon from "@material-ui/icons/Help";
import InfoIcon from "@material-ui/icons/Info";
import { Button, Tooltip } from "@material-ui/core";

export default function Header() {
  const helpText = (
    <div>
      <p>
        The markers are clustered. Zoom in (mouse wheel / zoomcontrol) to see
        further markers.
      </p>
      <p>Click on a marker to display details.</p>
      <p>
        Every marker contains a button that will forward you to the homepage of
        the USGS to provide further information.
      </p>
      <p>
        Close a marker by clicking somewhere outside of the marker or by
        pressing the "ESC"-key on the keyboard.
      </p>
      <p>May the force be with you!</p>
    </div>
  );

  const infoText = (
    <div>
      <p>
        Click here to be forwarded to the GeoJSON Summary Format of USGS science
        for a changing world.
      </p>
    </div>
  );

  return (
    <div className="Header">
      <Button
        href="https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php"
        target="_blank"
      >
        <Tooltip title={infoText}>
          <HelpIcon className="Helper-icon" />
        </Tooltip>
      </Button>
      <Tooltip title={helpText}>
        <InfoIcon className="Info-icon" />
      </Tooltip>
    </div>
  );
}
