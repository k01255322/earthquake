import { Button, Popover, Typography } from "@material-ui/core";
import React from "react";
import CustomPopoverContent from "./CustomPopoverContent";

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
      /**
       * Blocks the disapearing scrollbar at the main page
       * when a popover is opened
       */
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
      {/*
      Header of the popover-content 
       */}
      <Typography className="Typography-header">
        {props.data.place == null
          ? "place: no data available"
          : props.data.place}
      </Typography>
      {/* 
      Content of the popover
       */}
      <CustomPopoverContent name="lng" data={props.data.longitude} />
      <CustomPopoverContent name="lat" data={props.data.latitude} />

      <CustomPopoverContent name="title" data={props.data.title} />
      <CustomPopoverContent name="mag" data={props.data.mag} />
      <CustomPopoverContent name="time" data={props.data.time} />
      <CustomPopoverContent name="updated" data={props.data.updated} />
      <CustomPopoverContent
        name="tz"
        data={props.data.tz + "h offset from UTC"}
      />
      <CustomPopoverContent name="felt" data={props.data.felt} />
      <CustomPopoverContent name="cdi" data={props.data.cdi} />
      <CustomPopoverContent name="mmi" data={props.data.mmi} />
      <CustomPopoverContent name="alert" data={props.data.alert} />
      <CustomPopoverContent name="status" data={props.data.status} />
      <CustomPopoverContent name="tsunami" data={props.data.tsunami} />
      <CustomPopoverContent name="sig" data={props.data.sig} />
      <CustomPopoverContent name="net" data={props.data.net} />
      <CustomPopoverContent name="code" data={props.data.code} />
      <CustomPopoverContent name="ids" data={props.data.ids} />
      <CustomPopoverContent name="sources" data={props.data.sources} />
      <CustomPopoverContent name="types" data={props.data.types} />
      <CustomPopoverContent name="nst" data={props.data.nst} />
      <CustomPopoverContent name="dmin" data={props.data.dmin} />
      <CustomPopoverContent name="rms" data={props.data.rms} />
      <CustomPopoverContent name="magType" data={props.data.magType} />
      <CustomPopoverContent name="type" data={props.data.type} />
      <Typography className="Typography-content">
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
