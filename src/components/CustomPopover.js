import { Button, Popover, Typography } from "@material-ui/core";
import React from "react";

/**
 * Component to display the fetched data within Popovers
 * Data is checked if a valid value was retrieved;
 * If the valid is undefined/null --> "no data available" will be shown
 */

export default function CustomPopover(props) {
  return (
    <Popover
      id={props.id}
      open={props.open}
      onClose={props.onClose}
      disableScrollLock
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
    >
      <Typography className="Typography-header">
        {props.data.place == null
          ? "place: no data available"
          : props.data.place}
      </Typography>
      <Typography className="Typography-content">
        title:
        {props.data.title == null
          ? "title: no data available"
          : " " + props.data.title}
        <br />
        type:
        {props.data.type == null ? " no data available" : " " + props.data.type}
        <br />
        time:
        {props.data.time == null ? " no data available" : " " + props.data.time}
        <br />
        timezone:
        {props.data.tz == null
          ? " no data available"
          : " " + props.data.tz + " h offset from UTC"}
        <br />
        updated:
        {props.data.updated == null
          ? " no data available"
          : " " + props.data.updated}
        <br />
        felt:
        {props.data.felt == null ? " no data available" : " " + props.data.felt}
        <br />
        alert:
        {props.data.alert == null
          ? " no data available"
          : " " + props.data.alert}
        <br />
        status:
        {props.data.status == null
          ? " no data available"
          : " " + props.data.status}
        <br />
        tsunami:
        {props.data.tsunami == null
          ? " no data available"
          : " " + props.data.tsunami}
        <br />
        sig:
        {props.data.sig == null ? " no data available" : " " + props.data.sig}
        <br />
        net:
        {props.data.net == null ? " no data available" : " " + props.data.net}
        <br />
        code:
        {props.data.code == null ? " no data available" : " " + props.data.code}
        <br />
        ids:
        {props.data.ids == null ? " no data available" : " " + props.data.ids}
        <br />
        mag:
        {props.data.mag == null ? " no data available" : " " + props.data.mag}
        <br />
        sources:
        {props.data.sources == null
          ? " no data available"
          : " " + props.data.sources}
        <br />
        types:
        {props.data.types == null
          ? " no data available"
          : " " + props.data.types}
        <br />
        nst:
        {props.data.nst == null ? " no data available" : " " + props.data.nst}
        <br />
        cdi:
        {props.data.cdi == null ? " no data available" : " " + props.data.cdi}
        <br />
        mmi:
        {props.data.mmi == null ? " no data available" : " " + props.data.mmi}
        <br />
        dmin:
        {props.data.dmin == null ? "no data available" : " " + props.data.dmin}
        <br />
        rms:
        {props.data.rms == null ? " no data available" : " " + props.data.rms}
        <br />
        gap:
        {props.data.gap == null ? " no data available" : " " + props.data.gap}
        <br />
        magType:
        {props.data.magType == null
          ? " no data available"
          : " " + props.data.magType}
        <br />
        <Button
          disabled={props.data.url == null ? true : false}
          href={props.data.url}
          target="_blank"
          className="Further-information"
        >
          Further information?
        </Button>
      </Typography>
    </Popover>
  );
}
