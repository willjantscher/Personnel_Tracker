import React from "react";

const Add_Member = (props) => {
  return (
    <div className="pt-2">
      <h3>Add Member</h3>

      <form onSubmit={props.onAddMember}>
        <div className="pt-2">
          <span>Paygrade: </span>
          <select id="paygrade" defaultValue="" onChange={props.onInputChange}>
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
            className="form-label"
            name="first name"
            id="first_name"
            placeholder="First Name"
            onChange={props.onInputChange}
          ></input>
        </div>

        <div>
          <span>Last Name: </span>
          <input
            name="last name"
            id="last_name"
            placeholder="Last Name"
            onChange={props.onInputChange}
          ></input>
        </div>

        <div>
          <span>Birthday: </span>
          <input
            id="birthday"
            onChange={props.onInputChange}
            type="date"
          ></input>
        </div>

        <div>
          <span>Opr/Epr Status</span>
          <select
            id="opr_epr_status"
            onChange={props.onInputChange}
            defaultValue="Not Due"
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
            type="radio"
            name="hasAssignment"
          ></input>
          <span>Yes</span>
          <input
            id="no_assignment"
            value="1"
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
            onChange={props.onInputChange}
            type="date"
          ></input>
        </div>

        <div>
          <span>Departure Date: </span>
          <input
            id="departure_date"
            onChange={props.onInputChange}
            type="date"
          ></input>
        </div>
        <div className="pt-3">
         <input type="submit" value="Add Member to Database" />
        </div>
      </form>
    </div>
  );
};

export default Add_Member;
