import React, { Component } from "react";
import AdditionalDutyService from '../services/AdditionalDutyService'

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duties: [
        {
          name: "Clothing Monitor",
          rank: "TSgt",
          firstName: "Richard",
          lastName: "Schafer",
        },
        {
          name: "UHM",
          rank: "TSgt",
          firstName: "Matthew",
          lastName: "Otto",
        },
        {
          name: "Resource Advisor",
          rank: "Maj",
          firstName: "Chad",
          lastName: "Evans",
        },
        {
          name: "Security Manager",
          rank: null,
          firstName: null,
          lastName: null,
        },
      ],
    };

    // this.addDuty = this.addDuty.bind(this);
    // this.editDuty = this.editDuty.bind(this);
    // this.deleteDuty = this.deleteDuty.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="row text-center mt-4">
          <div className="col-md-6">
            <h3>Additional Duties Roster</h3>
          </div>
          <div className="col-md-6">
            <h3>
              <button
                className="btn btn-sm btn-primary"
                onClick={this.viewUnassigned}
              >
                {" "}
                View Unassigned
              </button>
              &nbsp;
              <button className="btn btn-sm btn-success" onClick={this.addDuty}>
                Add Additional Duty
              </button>
            </h3>
          </div>
        </div>
        <br />
        <div className="row">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Additional Duty</th>
                <th scope="col">Rank</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.duties.map((duty) => (
                <tr
                  key={duty.id}
                  className={!duty.lastName ? "table-danger" : ""}
                >
                  <td> {duty.name} </td>
                  <td> {duty.rank} </td>
                  <td> {duty.firstName} </td>
                  <td> {duty.lastName}</td>
                  <td>
                    <button onClick={ () => this.editDuty(duty.id)} className="btn btn-sm btn-success">Edit </button>&nbsp;
                    <button onClick={ () => this.deleteDuty(duty.id)} className="btn btn-sm btn-danger">Delete </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
