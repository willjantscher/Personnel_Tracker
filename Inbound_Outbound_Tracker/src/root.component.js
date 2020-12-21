import React from "react";
import PCS_Tracker from "./components/PCS_Tracker";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

export default function Root(props) {
  return (
    <div>
      <Navbar />
      <PCS_Tracker />
    </div>
  );
}
