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

  render() {
    return (
      <div>
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
