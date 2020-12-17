import React from "react";

function PersonListItem({ members }) {
  let list = members.map((member) => (
    <li>
      {" "}
      {member.first_name} {member.last_name}{" "}
    </li>
  ));

  return (
    <div>
      <ol>{list}</ol>
    </div>
  );
}

export default PersonListItem;
