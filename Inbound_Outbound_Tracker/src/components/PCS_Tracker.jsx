import React from "react";
import 'regenerator-runtime/runtime';
import ListMembers from "./ListMembers"

//http://single-spa-playground.org/playground/instant-test?name=@scorp/pcs&url=9003

class PCS_Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { memberList: [{}] }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch(`http://localhost:8080/members`)
      .then((res) => res.json())
      .then((data) => this.setState({ memberList: data }));
  }


  render() {
    return (
      <div className="container">
        <div className="row text-center mt-3">
          <div className="col-md-6">
            <h3>Inbounds/Outbounds</h3>
          </div>
        </div>
        <br />        
          <ListMembers memberList = {this.state.memberList}/>
      </div>
    );
  }
}

export default PCS_Tracker;
