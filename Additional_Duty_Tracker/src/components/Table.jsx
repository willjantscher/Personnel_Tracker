import React, { Component } from "react";
import AdditionalDutyService from "../services/AdditionalDutyService";
import EditForm from "./EditForm";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duties: [],
    };

    // this.addDuty = this.addDuty.bind(this);
    this.editDuty = this.editDuty.bind(this);
    this.deleteDuty = this.deleteDuty.bind(this);
    this.viewAll = this.viewAll.bind(this);
    this.viewUnassigned = this.viewUnassigned.bind(this);
  }

  componentDidMount() {
    AdditionalDutyService.getDuties().then((res) => {
      this.setState({ duties: res.data });
    });
  }

  viewAll() {
    this.componentDidMount();
  }

  viewUnassigned() {
    AdditionalDutyService.getUnassignedDuties().then((res) => {
      this.setState({ duties: res.data });
    });
  }

  deleteDuty(id) {
    AdditionalDutyService.deleteDuty(id).then((res) => {
      this.setState({
        duties: this.state.duties.filter((duty) => duty.duty_id !== id),
      });
    });
  }

  editDuty(id) {
    return <EditForm duty_id="id" />;
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
              <button className="btn btn-sm btn-primary" onClick={this.viewAll}>
                View All
              </button>
              &nbsp;
              <button
                className="btn btn-sm btn-danger"
                onClick={this.viewUnassigned}
              >
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
                <th scope="col">Title</th>
                <th scope="col">Member</th>
                <th scope="col">Workload</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.duties.map((duty) => (
                <tr
                  key={duty.id}
                  className={!duty.member_id ? "table-danger" : ""}
                >
                  <td> {duty.title} </td>
                  <td> {duty.member_id} </td>
                  <td> {duty.workload} </td>
                  <td>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#editModal"
                      className="btn btn-sm btn-success"
                      onClick={() => this.editDuty(duty.duty_id)}
                    >
                      Edit
                    </button>
                    &nbsp;
                    <button
                      onClick={() => this.deleteDuty(duty.duty_id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
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
