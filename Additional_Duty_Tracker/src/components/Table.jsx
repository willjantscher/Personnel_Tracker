import React, { Component } from "react";
import AdditionalDutyService from "../services/AdditionalDutyService";
import MemberService from "../services/MemberService";
import AddForm from "./AddForm";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duties: [],
      members: [],
      showAddForm: false,
      showSuccessMessage: false,
      // Form inputs:
      title: '',
      member_id: null,
      workload: 10
    };

    this.deleteDuty = this.deleteDuty.bind(this);
    this.viewAll = this.viewAll.bind(this);
    this.viewUnassigned = this.viewUnassigned.bind(this);
    this.addDuty = this.addDuty.bind(this);
    this.changeTitleHandler = this.changeTitleHandler.bind(this);
    this.changeMemberHandler = this.changeMemberHandler.bind(this);
    this.changeWorkloadHandler = this.changeWorkloadHandler.bind(this);
    this.submitAddDuty = this.submitAddDuty.bind(this);
  }

  componentDidMount() {
    AdditionalDutyService.getDutiesDetails().then((res) => {
      this.setState({ duties: res.data
        .sort(function(a, b) {
          var nameA = a.title.toUpperCase(); // ignore upper and lowercase
          var nameB = b.title.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1; //nameA comes first
          } else if (nameA > nameB) {
            return 1; // nameB comes first
          } else {
            return 0;  // names must be equal
          }
        })
      })
    }),
    MemberService.getMembers().then((res) => {
      this.setState({ members: res.data
        .sort(function(a, b) {
          var nameA = a.last_name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.last_name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1; //nameA comes first
          } else if (nameA > nameB) {
            return 1; // nameB comes first
          } else {
            return 0;  // names must be equal
          }
        })
      });
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

  addDuty() {
    this.setState({ 
      showAddForm: true, 
      showSuccessMessage: false
    });
  }

  changeTitleHandler(e) {
    this.setState({title: e.target.value});
  }

  changeMemberHandler(e) {
    this.setState({member_id: e.target.value});
  }

  changeWorkloadHandler(e) {
    this.setState({workload: e.target.value});
  }

  submitAddDuty(e) {
    e.preventDefault();
    const duty = JSON.stringify({
      title: this.state.title,
      member_id: parseInt(this.state.member_id),
      workload: parseInt(this.state.workload),
    });
    AdditionalDutyService.createDuty(duty).then((res) => {
      this.componentDidMount();
      console.log("Added " + duty);
      this.setState({showSuccessMessage: true});
      this.setState({showAddForm: false});
    })
  }


  colorizeRow(duty) {
      if (!duty.last_name) {
        return "table-danger"
      } else if (duty.departure_date) {
        return "table-warning"
      } else {
        return "table-success"
      } 
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
              <button
                className="btn btn-sm btn-success"
                onClick={this.addDuty}
              >
                Add a New Duty
              </button>
            </h3>
            {this.state.showAddForm ? <AddForm 
            members={this.state.members} 
            onTitleInput={this.changeTitleHandler}
            onMemberSelect={this.changeMemberHandler}
            onWorkloadInput={this.changeWorkloadHandler}
            onSubmitForm={this.submitAddDuty} /> : null}
            {this.state.showSuccessMessage ? 
            <p className="text-success">Success!</p> : null}
          </div>
        </div>
        <br />
        <div className="row">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Duty Title</th>
                <th scope="col">Last Name</th>
                <th scope="col">First Name</th>
                <th scope="col">Rank</th>
                <th scope="col">Workload</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.duties.map((duty) => (
                <tr
                  key={duty.id}
                  className={this.colorizeRow(duty)}>
                  <td> {duty.title} </td>
                  <td> {duty.last_name} </td>
                  <td> {duty.first_name} </td>
                  <td> {duty.paygrade} </td>
                  <td> {duty.workload} </td>
                  <td>
                    <button
                      className="btn btn-sm btn-success"
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
