import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Add_Member from "./Add_Member";

class Main_Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      member: {
        first_name: "",
        last_name: "",
        rank: "",
        departure_date: "",
        rater_first_name: "",
        rater_last_name: "",
        arrival_date: "",
        birthday: "",
      },
    };
  }

  render() {
    return (
      <Router>
        <Link to={"/main/Add_Member"}>
          <div>Add a Member</div>
        </Link>
        <Route path="/main/Add_Member" component={AddMember} />

        {/* create links that will go to a path that is caught by the route path */}
        <Link to={"/main/test1"}>
          <div>link to test1</div>
        </Link>
        <Link to={"/main/test2"}>
          <div>link to test2</div>
        </Link>
        <h1>Welcome to the page</h1>
        <Route path="/main/test1" component={Test1} />
        <Route path="/main/test2" component={Test2} />
        <Route
          exact={true}
          path="/main"
          render={() => <h1>Welcome to exact path</h1>}
        />
        {/* create routes for the different links */}
      </Router>
    );
  }
}

const AddMember = () => {
  return <Add_Member />;
};

//this will test a query to the database in the spring environment
const Test1 = () => {
  fetch("/localhost:port/omepathstuffhere")
    .then((res) => res.json)
    .then((res) => {
      console.log(res);
    });
  return <div>something in test1</div>;
};

const Test2 = () => {
  return <div>something in test 2 hello there</div>;
};

export default Main_Page;
