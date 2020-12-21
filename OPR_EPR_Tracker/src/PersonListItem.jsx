import React from "react";

function PersonListItem({ members, onChange, filteredMembers, filter }) {
  const toBeMapped = filter ? filteredMembers : members;

  var row = 1;

  let list = toBeMapped.map((member) => (
    <tr>
      <th scope="row">{row++}</th>
      <td>{member.first_name}</td>
      <td>{member.last_name}</td>
      <td>
        <select
          name="status"
          className="custom-select"
          onChange={onChange}
          member_id={member.member_id}
          value={member.opr_epr_status}
        >
          <option value="not-due">Not Due</option>
          <option value="pending">Pending</option>
          <option value="created">Created</option>
          <option value="routed">Routed</option>
          <option value="completed">Completed</option>
        </select>
      </td>
    </tr>
  ));

  return (
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );
}

export default PersonListItem;
