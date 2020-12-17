import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
} from "react-router-dom";
import Add_Member from "./Add_Member";
import Search_Member from "./Search_Member";

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

  render() {
    return (
      <div>
        Select a member to see their data
        <Search_Member members={this.state.members} />
        <Link to={"/main/SearchMember/EditMember"}>
          <div>Edit a member</div>
        </Link>
        <Route path="/main/SearchMember/EditMember" component={EditMember} />
      </div>
    );
  }
}

class EditMember extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>Inside of the Edit Member component</div>;
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
      <div>
        <h1>Alpha Roster</h1>
        <table>
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
    );
  }

  render() {
    return <div>{this.generateTable()}</div>;
  }
}

//this is the route/page that will handle adding a member
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
    e.preventDefault;
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
