import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
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

  handleAddMember = (e) => {
    e.preventDefault();
    console.log("add member called");
  };

  render() {
    return (
      <Router>
        <h1>Welcome to the page</h1>

        <Link to={"/main/Add_Member"}>
          <div>Add a Member</div>
        </Link>

        {/* create links that will go to a path that is caught by the route path */}
        {/* <Link to={"/main/test1"}>
          <div>link to test1</div>
        </Link> */}
        {/*         
        <Link to={"/main/test2"}>
          <div>link to test2</div>
        </Link> */}

        <Route
          path="/main/Add_Member"
          component={AddMember}
          state={this.state}
        />
        {/* <AddMember state={this.state}></AddMember> */}
        {/* <Route path="/main/test1" component={Test1} />
        <Route path="/main/test2" component={Test2} /> */}
        {/* <Route
          exact={true}
          path="/main"
          render={() => <h1>Welcome to exact path</h1>}
        /> */}
        {/* create routes for the different links */}
      </Router>
    );
  }
}

//this is the route/page that will handle adding a member
class AddMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: {
        paygrade: "E1",
        first_name: "will",
        last_name: "",
        birthday: "",
        has_assignment: "",
        arrival_date: "",
        departure_date: "",
        opr_epr_status: "",
      },
    };
  }

  render() {
    // console.log(this.state);
    return <Add_Member onAddMember={this.handleAddMember} />;
  }
  // return <Add_Member
  //   onAddMember={this.handleAddMember}
  // />;
}

//this will test a query to the database in the spring environment
// const Test1 = () => {
//   fetch("/localhost:port/omepathstuffhere")
//     .then((res) => res.json)
//     .then((res) => {
//       console.log(res);
//     });
//   return <div>something in test1</div>;
// };

// const Test2 = () => {
//   return <div>something in test 2 hello there</div>;
// };

export default Main_Page;
