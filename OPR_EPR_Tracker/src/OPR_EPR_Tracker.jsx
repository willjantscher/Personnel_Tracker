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
    let value = e.target.value;
    let member_id = e.target.attributes.member_id.value;

    var requestOptions = {
      method: "PATCH",
      "Access-Control-Allow-Methods": "Patch",
      body: value,
      redirect: "follow",
    };

    fetch(`http://localhost:8080/members/${member_id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
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
