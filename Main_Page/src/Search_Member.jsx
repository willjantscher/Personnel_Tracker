import React from "react";

const Search_Member = (props) => {
  let memberNames = props.members.map((member) => {
    return (
      <option
        value={member.member_id}
        key={member.member_id}
        id={member.member_id}
      >
        {member.first_name + " " + member.last_name}
      </option>
    );
  });
  return (
    <select defaultValue="" onChange={props.onSelectMember}>
      <option key="emptyoption" value=""></option>
      {memberNames}
    </select>
  );
};

export default Search_Member;
