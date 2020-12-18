import React from "react";

const Display_Member = (props) => {
  return (
    <div>
      <div></div>
      <table className="table table-striped table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Assignment Status</th>
            <th scope="col">Arrival Date</th>
            <th scope="col">Departure Date</th>
            <th scope="col">OPR/EPR Status</th>
          </tr>
        </thead>

        <tbody>
          <tr className="table-info">
            <td>{props.member.paygrade}</td>
            <td>{props.member.first_name}</td>
            <td>{props.member.last_name}</td>
            <td>{props.member.birthday}</td>
            <td>{props.member.assignment}</td>
            <td>{props.member.arrival_date}</td>
            <td>{props.member.departure_date}</td>
            <td>{props.member.opr_epr_status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Display_Member;
