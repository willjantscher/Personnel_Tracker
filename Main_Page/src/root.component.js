import React from "react";

import Main_Page from "./Main_Page";

//this essentially acts as the react app router, reference classes inside here

export default function Root(props) {
  return (
    <Main_Page /> //this will be a main_page class that extends the react app
  );
}
