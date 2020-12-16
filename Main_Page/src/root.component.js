import React from "react";

//this essentially acts as the react app router, reference classes inside here

export default function Root(props) {
  return (
    <div>
      <div>first data of stuff</div>
      <section>{props.name} is mounted!</section>
      <div>testing things</div>
      <button id="tracker">
        <a href={"http://localhost:9000/tracker"}>Teacher Home Page</a>
      </button>
      <a href="/tracker" onclick="singleSpaNavigate()">
        My link
      </a>
    </div>
  );
}

// class Main_Menu extends React.Component {

//   render() {
//     return (
//       <div>this is a test of react class in the main page js file for single spa</div>
//     )
//   }
// }
