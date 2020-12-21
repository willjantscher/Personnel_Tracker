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
import Display_Member from "./Display_Member";

// import "./Main_Page.css";

import USSF_GIF from "./Photos/USSF_GIF.gif";
// import USSF_LOGO from "./Photos/USSF_LOGO.png"

class Main_Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <div className="row mt-4">
            {/* <div className="col-md-4">
            <h3>Welcome to the Main Page</h3>
          </div> */}
            <div className="col-md-1"></div>
            <div className="col-md-8">
              <h3>
                <Link to={"/main"}>
                  <button className="btn btn-lg btn-primary">
                    ----Home----
                  </button>
                </Link>
                &nbsp; &nbsp;
                <Link to={"/main/Add_Member"}>
                  <button className="btn btn-sm btn-info">Add a Member</button>
                </Link>
                &nbsp; &nbsp;
                <Link to={"/main/SearchMember"}>
                  <button className="btn btn-sm btn-info">
                    Search for a Member
                  </button>
                </Link>
                &nbsp; &nbsp;
                <Link to={"/main/Alpha_Roster"}>
                  <button className="btn btn-sm btn-info">
                    Generate Alpha Roster
                  </button>
                </Link>
              </h3>
            </div>
            <div className="col-md-3"></div>
          </div>

          <div id="content" className="info">
            <Route path="/main/SearchMember" component={SearchMember} />
            <Route path="/main/Alpha_Roster" component={AlphaRoster} />
            <Route path="/main/Add_Member" component={AddMember} />
          </div>
        </div>

        <Route className="row justify-content-center" exact path="/main">
          <p className="text-center mt-5">
            <img
              className="justify-content-center"
              src={USSF_GIF}
              width="500"
              alt="loading awesomeness"
            />
          </p>
        </Route>
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
        if (
          data.status === 500 ||
          this.state.selectedMember.first_name === "" ||
          this.state.selectedMember.last_name === ""
        ) {
          this.setState({ Request: "bad" });
        } else {
          this.setState({ Request: "good" });
          this.setState({ memberSelected: false });
        }
      });
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
    this.setState({ Request: "pending" });
    // return(<Redirect to="/main" />)
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-1"></div>

          <div className="col-lg-10">
            <h3>Select a member to see their data</h3>
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
                      <div></div>
                      <Display_Member member={this.state.selectedMember} />
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
                    <div className="alert-success text-center">
                      {this.state.patchedMember.first_name} has been updated in
                      the database
                    </div>
                  );
                case "bad":
                  return (
                    <div className="alert-danger text-center">
                      ERROR! You must specify a first and last name as well as
                      an assignment status.
                    </div>
                  );
                default:
                  return <div></div>;
              }
            })()}
          </div>

          <div className="col-md-1"></div>
        </div>
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
        <tr className="">
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
          <h3>Alpha Roster</h3>
          <table className="table table-striped table-bordered table-hover table-light">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">Assignment Status</th>
                <th scope="col">Arrival Date</th>
                <th scope="col">Departure Date</th>
                <th scope="col">OPR/EPR Status</th>
              </tr>
            </thead>
            <tbody className="table-info">{table}</tbody>
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
    console.log(this.state.member);
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
        this.setState({ postedMember: data });
        // console.log(data.status)
        if (
          data.status === 500 ||
          this.state.member.first_name === "" ||
          this.state.member.last_name === ""
        ) {
          this.setState({ Request: "bad" });
        } else {
          this.setState({ Request: "good" });
          // this.setState({
          //   member: {
          //     paygrade: null,
          //     first_name: null,
          //     last_name: null,
          //     birthday: null,
          //     has_assignment: null,
          //     arrival_date: null,
          //     departure_date: null,
          //     opr_epr_status: "Not Due",
          //   },
          // });
        }
      });
  }

  handleAddMember = (e) => {
    e.preventDefault();
    this.postUser();
    this.setState({ Request: "pending" });
    // this.setState({ member : {} });
  };

  render() {
    // console.log(this.state);
    return (
      <Router>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-8">
            <Display_Member member={this.state.member} />
            <Add_Member
              onAddMember={this.handleAddMember}
              onInputChange={this.handleInputChange}
            />
            {(() => {
              switch (this.state.Request) {
                case "good":
                  return (
                    // <Redirect to="/main"/>
                    <div className="alert-success text-center">
                      {this.state.postedMember.first_name} has been added to the
                      database
                    </div>
                  );
                case "bad":
                  return (
                    <div className="alert-danger text-center">
                      ERROR! You must specify a first and last name as well as
                      an assignment status.
                    </div>
                  );
                default:
                  return <div></div>;
              }
            })()}
          </div>
          <div className="col-md-3"></div>
        </div>
      </Router>
    );
  }
}

export default Main_Page;

//npm install bootstrap
//
//look at add duty, src, componennts, table for formatting
