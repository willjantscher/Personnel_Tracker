import React from "react";

const Search_Member = (props) => {
  let memberNames = props.members.map((member) => {
    return member.first_name + " " + member.last_name;
  });
  return (
    <div>
      <select id="paygrade">
        <option value=""></option>
        {memberNames.map((member) => (
          <option value={member} key={member}>
            {member}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Search_Member;
