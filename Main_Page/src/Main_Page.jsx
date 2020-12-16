import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class Main_Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
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
          path="/"
          render={() => <h1>Welcome to exact path</h1>}
        />
        {/* create routes for the different links */}
      </Router>
    );
  }
}

const Test1 = () => {
  return <div>something in test1</div>;
};

const Test2 = () => {
  return <div>something in test 2 hello there</div>;
};

export default Main_Page;
