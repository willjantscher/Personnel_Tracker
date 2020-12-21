import React from "react";

import Main_Page from "./Main_Page";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./Navbar";

//this essentially acts as the react app router, reference classes inside here

export default function Root(props) {
  return (
    <div>
      {/* <Navbar /> */}
      <Main_Page />
    </div>
  );
}
