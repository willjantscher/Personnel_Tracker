import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
} from "react-router-dom";
import Add_Member from "./Add_Member";

class Main_Page extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   member: {
    //     paygrade: "",
    //     first_name: "",
    //     last_name: "",
    //     birthday: "",
    //     has_assignment: "",
    //     arrival_date: "",
    //     departure_date: "",
    //     opr_epr_status: "due now"
    //   },
    // };
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
        <Link to={"/main/Alpha_Roster"}>
          <div>Generate Alpha Roster</div>
        </Link>

        <Route path="/main/Alpha_Roster" component={AlphaRoster} />
        <Route path="/main/Add_Member" component={AddMember} />
      </Router>
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
        if (member.opr_epr_status === 0) {
        }
      }
      return (
        <tr>
          <td>{member.paygrade}</td>
          <td>{member.first_name}</td>
          <td>{member.last_name}</td>
          <td>{member.birthday}</td>
          <td>{member.has_assignment}</td>
          <td>{member.arrival_date}</td>
          <td>{member.departure_date}</td>
          <td>{member.opr_epr_status}</td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <h2>Alpha Roster</h2>
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
    );
  }

  render() {
    return (
      <div>
        {this.generateTable()}
        <div>You are now seeing the Alpha Roster ooooo</div>
        {this.state.members[0].last_name}
      </div>
    );
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

const MemberAdded = () => {
  return <div>Member added Successfully!</div>;
};

export default Main_Page;
