import React from "react";
import { Typography } from "@material-ui/core";

export default function CustomPopoverContent(props) {
  const noData = "no data available";

  return (
    <Typography className="Typography-content">
      <b>{props.name + ": "}</b>
      {props.data == null ? noData : props.data}
    </Typography>
  );
}
