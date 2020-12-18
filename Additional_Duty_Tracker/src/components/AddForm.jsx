import React, { Component } from "react";
import AdditionalDutyService from "../services/AdditionalDutyService";
import MemberService from "../services/MemberService";

class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
    };
  }

  componentDidMount() {
    MemberService.getMembers().then((res) => {
      this.setState({ members: res.data });
    });
  }

  render() {
    return (
      <form onSubmit={props.submitAddForm} className="mt-3">
        <div className="mb-3 input-group">
          <label for="dutyTitle" className="form-label">Additional Duty Title</label>&nbsp;
          <input type="text" className="form-control" name="dutyTitle" id="dutyTitle" required />
        </div>
        <div className="mb-3 input-group">
        <label for="assignment" className="form-label">Choose a Member (optional)</label>&nbsp;
        <select className="form-select form-control" aria-label="Optional: Select a person to assign">
          <option selected>Select Member...</option>
          {this.state.members.map((member) => (
                <option value={member.member_id}
                  key={member.member_id} name="assignment"
                  >{member.paygrade} {member.first_name} {member.last_name}</option>
          ))};
        </select>
        </div>
        <div className="mb-3 input-group">
          <label for="workload" className="form-label">Workload Rating (1-10)</label>&nbsp;
          <input type="range" className="form-range form-control" min="1" max="10" step="1" name="workload" id="workload" required />
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    );
  }
}

export default AddForm;
