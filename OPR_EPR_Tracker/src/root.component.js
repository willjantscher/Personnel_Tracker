import React from "react";

export default function Root(props) {
  return (
    <div>
      <section>{props.name} is mounted!</section>
      <div>some text here</div>
      <button id="main-page">
        <a href={"/main"}>Main Page</a>
      </button>
    </div>
  );
}
