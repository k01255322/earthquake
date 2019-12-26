import React from "react";
import { Link } from "@material-ui/core";

export default function Footer() {
  return (
    <div className="Footer">
      <Link
        href="https://earthquake.usgs.gov/"
        className="Footer-content"
        target="_blank"
      >
        Data was retrieved from USGS science for a changing world
      </Link>
    </div>
  );
}
