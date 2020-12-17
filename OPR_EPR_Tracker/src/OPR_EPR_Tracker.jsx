import React from "react";
import PersonListItem from "./PersonListItem";

class OPR_EPR_Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
    };
  }

  async componentDidMount() {
    await this.getData();
  }

  async getData() {
    await fetch(`http://localhost:8080/members`)
      .then((res) => res.json())
      .then((data) => this.setState({ members: data }));
  }

  handleOnchangeStatus(e) {
    let status = e.target.value;
  }

  render() {
    return (
      <div>
        <PersonListItem
          members={this.state.members}
          onChange={this.handleOnchangeStatus}
        />
      </div>
    );
  }
}

export default OPR_EPR_Tracker;
