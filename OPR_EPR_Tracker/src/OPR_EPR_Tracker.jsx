import React from "react";
import PersonListItem from "./PersonListItem";

class OPR_EPR_Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      filter: false,
      filteredMembers: [],
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
      .then()
      .catch((error) => console.log("error", error));
  }

  handleFilter(e) {
    if (e.target.value === "Filter by Status") {
      this.setState({ filter: false });
    } else {      
      let filtered = this.state.members.filter((member) => member.opr_epr_status === e.target.valueue)
      this.setState({ filter: true, filteredMembers: filtered });
    }
  }

  render() {
    return (
      <div>
        <div>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={this.handleFilter.bind(this)}
          >
            <option selected>Filter by Status</option>
            <option value="not-due">Not Due</option>
            <option value="pending">Pending</option>
            <option value="created">Created</option>
            <option value="routed">Routed</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="container-md">
          <PersonListItem
            members={this.state.members}
            onChange={this.handleOnchangeStatus.bind(this)}
            filter={this.state.filter}
            filteredMembers={this.state.filteredMembers}
          />
        </div>
>
    />
