import React, { Component } from "react";

function AddForm(props) {
  return (
    <div className="card">
      <div className="card-header bg-dark text-light">Add Additional Duty</div>
      <div className="card-body">
        <form className="mt-3">
          <div className="mb-3 input-group">
            <label for="title" className="form-label">
              Additional Duty Title
            </label>
            &nbsp;
            <input
              type="text"
              className="form-control"
              name="title"
              value={props.title}
              onChange={props.onTitleInput}
              required
            />
          </div>
          <div className="mb-3 input-group">
            <label for="member_id" className="form-label">
              Choose a Member (optional)
            </label>
            &nbsp;
            <select
              onChange={props.onMemberSelect}
              name="member_id"
              className="form-select form-control"
              aria-label="Optional: Select a person to assign"
            >
              <option disabled selected value>
                Select Member...
              </option>
              {props.members.map((member) => (
                <option value={member.member_id} key={member.member_id}>
                  {member.last_name}, {member.first_name} {member.paygrade}
                </option>
              ))}
              ;
            </select>
          </div>
          <div className="mb-3 input-group">
            <label for="workload" className="form-label">
              Workload Rating
            </label>
            &nbsp;
            <input
              type="range"
              className="form-range form-control"
              min="1"
              max="20"
              step="1"
              name="workload"
              id="workload"
              value={props.workload}
              onChange={props.onWorkloadInput}
              required
            />
          </div>
          <input
            type="button"
            onClick={props.onSubmitForm}
            className="btn btn-success"
            value="Submit"
          />
          &nbsp;
          <input
            type="button"
            onClick={props.onHideForm}
            className="btn btn-danger"
            value="Cancel"
          />
        </form>
      </div>
    </div>
  );
}

export default AddForm;
