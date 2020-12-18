import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
} from "react-router-dom";
import Add_Member from "./Add_Member";
import Search_Member from "./Search_Member";
import Edit_Member from "./Edit_member";

class Main_Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <h1>Welcome to the page</h1>
        <Link to={"/main"}>
          <div>Home</div>
        </Link>
        <Link to={"/main/Add_Member"}>
          <div>Add a Member</div>
        </Link>
        <Link to={"/main/SearchMember"}>
          <div>Search for a Member and edit their data</div>
        </Link>
        <Link to={"/main/Alpha_Roster"}>
          <div>Generate Alpha Roster</div>
        </Link>

        <Route path="/main/SearchMember" component={SearchMember} />
        <Route path="/main/Alpha_Roster" component={AlphaRoster} />
        <Route path="/main/Add_Member" component={AddMember} />
      </Router>
    );
  }
}

class SearchMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [{}],
      selectedMemberId: null,
      selectedMember: null,
      memberSelected: false,
      patchedMember: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:8080/members", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        this.setState({ members: data });
      });
  }

  async updateMember() {
    await fetch(
      `http://localhost:8080/members/edit-member/${this.state.selectedMemberId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.selectedMember),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        this.setState({ patchedMember: data }, () =>
          console.log(
            this.state.patchedMember.first_name +
              " has been updated in the database"
          )
        );
        // console.log(data.status)
        if (data.status === 500) {
          this.setState({ Request: "bad" });
        } else {
          this.setState({ Request: "good" });
        }
      });
    this.setState({ memberSelected: false });
  }

  handleSelectMember = (e) => {
    // console.log(e.target.value)
    this.setState({ Request: "pending" });
    this.setState({ memberSelected: false });
    this.setState({ selectedMemberId: e.target.value }, () => {
      fetch(`http://localhost:8080/members/${this.state.selectedMemberId}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          this.setState({ selectedMember: data, memberSelected: true }, () =>
            console.log(this.state.selectedMember)
          );
        });
    });

    // return(
    //   <Redirect to="/main" />
    // )
  };

  handleInputChange = (e) => {
    e.preventDefault();
    // console.log("some input has changed")
    let tempMember = this.state.selectedMember;
    tempMember[e.target.id] = e.target.value;
    this.setState({ selectedMember: tempMember });
    // console.log('input change called ' + this.state.member[e.target.id] )
  };

  handleEditMember = (e) => {
    e.preventDefault();
    this.updateMember();
    console.log("member edited and updated in the database");
  };

  render() {
    return (
      <div>
        Select a member to see their data
        <Search_Member
          members={this.state.members}
          onSelectMember={this.handleSelectMember}
        />
        {(() => {
          switch (this.state.memberSelected) {
            case true:
              return (
                // <Redirect to="/main"/>
                <div>
                  <h4>this is the member data</h4>
                  <Edit_Member
                    member={this.state.selectedMember}
                    onEditMember={this.handleEditMember}
                    onInputChange={this.handleInputChange}
                  />
                </div>
              );
            default:
              return <div></div>;
          }
        })()}
        {(() => {
          switch (this.state.Request) {
            case "good":
              return (
                // <Redirect to="/main"/>
                <div>
                  {this.state.patchedMember.first_name} has been updated in the
                  database
                </div>
              );
            case "bad":
              return (
                <div>
                  ERROR! You must specify a first and last name as well as an
                  assignment status.
                </div>
              );
            default:
              return <div></div>;
          }
        })()}
      </div>
    );
  }
}

class AlphaRoster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [{}],
    };
  }
  componentDidMount() {
    fetch("http://localhost:8080/members", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        this.setState({ members: data });
      });
  }

  generateTable() {
    let table = this.state.members.map((member) => {
      {
        var assignment = "";
        if (member.has_assignment === 0) {
          assignment = "----------";
        } else {
          assignment = "Assigned";
        }
        var birthday = "";
        var arrival_date = "";
        var departure_date = "";
        if (member.birthday) {
          birthday = member.birthday.substring(0, 10);
        }
        if (member.arrival_date) {
          arrival_date = member.arrival_date.substring(0, 10);
        }
        if (member.departure_date) {
          departure_date = member.departure_date.substring(0, 10);
        }
      }
      return (
        <tr>
          <td>{member.paygrade}</td>
          <td>{member.first_name}</td>
          <td>{member.last_name}</td>
          <td>{birthday}</td>
          <td>{assignment}</td>
          <td>{arrival_date}</td>
          <td>{departure_date}</td>
          <td>{member.opr_epr_status}</td>
        </tr>
      );
    });

    return (
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-8">
          <h1>Alpha Roster</h1>
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <td>Rank</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Date of Birth</td>
                <td>Assignment Status</td>
                <td>Arrival Date</td>
                <td>Departure Date</td>
                <td>Opr/EPR Status</td>
              </tr>
            </thead>
            <tbody>{table}</tbody>
          </table>
        </div>
        <div className="col-lg-1"></div>
      </div>
    );
  }

  render() {
    return <div>{this.generateTable()}</div>;
  }
}

class AddMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: {
        paygrade: null,
        first_name: null,
        last_name: null,
        birthday: null,
        has_assignment: null,
        arrival_date: null,
        departure_date: null,
        opr_epr_status: "Not Due",
      },
      postedMember: {},
      Request: "pending",
    };
  }

  handleInputChange = (e) => {
    e.preventDefault();
    let tempMember = this.state.member;
    tempMember[e.target.id] = e.target.value;
    this.setState({ member: tempMember });
    // console.log('input change called ' + this.state.member[e.target.id] )
  };

  async postUser() {
    await fetch("http://localhost:8080/members/add-member", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.member),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        this.setState({ postedMember: data }, () =>
          console.log(
            this.state.postedMember.first_name +
              " has been added to the database"
          )
        );
        // console.log(data.status)
        if (data.status === 500) {
          this.setState({ Request: "bad" });
        } else {
          this.setState({ Request: "good" });
          this.setState({
            member: {
              paygrade: null,
              first_name: null,
              last_name: null,
              birthday: null,
              has_assignment: null,
              arrival_date: null,
              departure_date: null,
              opr_epr_status: "Not Due",
            },
          });
        }
      });
  }

  handleAddMember = (e) => {
    e.preventDefault();
    this.postUser();
    // this.setState({ member : {} });
  };

  render() {
    // console.log(this.state);
    return (
      <Router>
        <Add_Member
          onAddMember={this.handleAddMember}
          onInputChange={this.handleInputChange}
        />
        {(() => {
          switch (this.state.Request) {
            case "good":
              return (
                // <Redirect to="/main"/>
                <div>
                  {this.state.postedMember.first_name} has been added to the
                  database
                </div>
              );
            case "bad":
              return (
                <div>
                  ERROR! You must specify a first and last name as well as an
                  assignment status.
                </div>
              );
            default:
              return <div></div>;
          }
        })()}
      </Router>
    );
  }
}

export default Main_Page;

//npm install bootstrap
//
//look at add duty, src, componennts, table for formatting
