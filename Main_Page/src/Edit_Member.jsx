import React from "react";

const Edit_Member = (props) => {
  // console.log(props.member)
  // console.log(props.member.birthday.substring(0, 10))
  // console.log(props.member.has_assignment)
  var arrival_date;
  var departure_date;
  var has_assignment;
  var no_assignment;
  var birthday;

  if (props.member.arrival_date === null) {
    arrival_date = "";
  } else {
    arrival_date = props.member.arrival_date.substring(0, 10);
  }
  if (props.member.departure_date === null) {
    departure_date = "";
  } else {
    departure_date = props.member.departure_date.substring(0, 10);
  }
  if (props.member.has_assignment === 0) {
    has_assignment = false;
    no_assignment = true;
  } else {
    has_assignment = true;
    no_assignment = false;
  }
  if (props.member.birthday === null) {
    birthday = "";
  } else {
    birthday = props.member.birthday.substring(0, 10);
  }

  return (
    <div>
      <h2>Edit Member Data</h2>
      <form onSubmit={props.onEditMember}>
        <div>
          <span>Paygrade: </span>
          <select
            id="paygrade"
            defaultValue={props.member.paygrade}
            onChange={props.onInputChange}
          >
            <option value=""></option>
            <option value="E1">E1</option>
            <option value="E2">E2</option>
            <option value="E3">E3</option>
            <option value="E4">E4</option>
            <option value="E5">E5</option>
            <option value="E6">E6</option>
            <option value="E7">E7</option>
            <option value="E9">E9</option>
            <option value="E9">E9</option>
            <option value="O1">O1</option>
            <option value="O2">O2</option>
            <option value="O3">O3</option>
            <option value="O4">O4</option>
            <option value="O5">O5</option>
            <option value="O6">O6</option>
            <option value="O7">O7</option>
            <option value="O8">O8</option>
            <option value="O9">O9</option>
            <option value="O10">O10</option>
          </select>
        </div>

        <div>
          <span>First Name: </span>
          <input
            name="first name"
            id="first_name"
            placeholder="First Name"
            defaultValue={props.member.first_name}
            onChange={props.onInputChange}
          ></input>
        </div>

        <div>
          <span>Last Name: </span>
          <input
            name="last name"
            id="last_name"
            placeholder="Last Name"
            defaultValue={props.member.last_name}
            onChange={props.onInputChange}
          ></input>
        </div>

        <div>
          <span>Birthday: </span>
          <input
            id="birthday"
            defaultValue={birthday}
            onChange={props.onInputChange}
            type="date"
          ></input>
        </div>

        <div>
          <span>Opr/Epr Status</span>
          <select
            id="opr_epr_status"
            onChange={props.onInputChange}
            defaultValue={props.member.opr_epr_status}
          >
            <option value="Not Due">Not Due</option>
            <option value="Created">Created</option>
            <option value="Routed">Routed</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div>
          <span>Has Assignment</span>
          <input
            id="has_assignment"
            value="0"
            onChange={props.onInputChange}
            defaultChecked={has_assignment}
            type="radio"
            name="hasAssignment"
          ></input>
          <span>Yes</span>
          <input
            id="no_assignment"
            value="1"
            defaultChecked={no_assignment}
            onChange={props.onInputChange}
            type="radio"
            name="hasAssignment"
          ></input>
          <span>No</span>
        </div>

        <div>
          <span>Arrival Date: </span>
          <input
            id="arrival_date"
            defaultValue={arrival_date}
            onChange={props.onInputChange}
            type="date"
          ></input>
        </div>

        <div>
          <span>Departure Date: </span>
          <input
            id="departure_date"
            defaultValue={departure_date}
            onChange={props.onInputChange}
            type="date"
          ></input>
        </div>
        {/* <div>
          <span>Rater First Name: </span>
          <input
            name="rater first name"
            id="10"
            placeholder="First Name"
            onChange={props.onInputChange}
          ></input>
        </div>
        <div>
          <span>Rater Last Name: </span>
          <input
            name="rater last name"
            id="11"
            placeholder="Last Name"
            onChange={props.onInputChange}
          ></input>
        </div> */}
        <div></div>
        <input type="submit" value="Update Member Data" />
      </form>
    </div>
  );
};

export default Edit_Member;
