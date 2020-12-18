import React from "react";

function PersonListItem({ members, onChange }) {
  let list = members.map((member) => (
    <li>
      {" "}
      {member.first_name} {member.last_name}{" "}
      <select name="status" onChange={onChange}>
        <option value="not-due">Not Due</option>
        <option value="created">Created</option>
        <option value="routed">Routed</option>
        <option value="completed">Completed</option>
      </select>
    </li>
  ));

  return (
    <div>
      <ol>{list}</ol>
    </div>
  );
}

export default PersonListItem;
