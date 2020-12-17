import React from "react";

const Add_Member = (props) => {
  return (
    <div>
      <h2>Add Member</h2>
      <form>
        <div>
          <span>Rank: </span>
          <select>
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
            id="0"
            placeholder="First Name"
            onChange={props.onInputChange}
          ></input>
        </div>
        <div>
          <span>Last Name: </span>
          <input
            name="last name"
            id="1"
            placeholder="Last Name"
            onChange={props.onInputChange}
          ></input>
        </div>
        <div>
          <span>Birthday: </span>
          <input type="date"></input>
        </div>
        <div>
          <span>Arrival Date: </span>
          <input type="date"></input>
        </div>
        <div>
          <span>Departure Date: </span>
          <input type="date"></input>
        </div>
        <div>
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
        </div>
        <input type="submit" value="Add Member to Database" />
      </form>
    </div>
  );
};

export default Add_Member;
