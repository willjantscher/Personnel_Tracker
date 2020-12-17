import React, { Component } from "react";
import AdditionalDutyService from "../services/AdditionalDutyService";

class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.duty_id,
    };
  }

  submitEditDuty(id) {
    AdditionalDutyService.updateDuty(id).then((res) => {
      this.componentDidMount();
    });
  }

  render() {
    return (
      <div className="modal" id="editModal" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Duty</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.editDuty(duty.duty_id)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditForm;
