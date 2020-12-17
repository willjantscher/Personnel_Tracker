import React from "react";
import 'regenerator-runtime/runtime';
import ListMembers from "./ListMembers"

//http://single-spa-playground.org/playground/instant-test?name=@scorp/pcs&url=9003

class PCS_Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memberList: [{}],
      inbounds: [
        {
          firstName: "Aria",
          lastName: "LaFord",
          rank: "Maj",
          RNLTD: "31 May 2021",
        },
        {
          firstName: "John",
          lastName: "Doe",
          rank: "MSgt",
          RNLTD: "31 Jan 2021",
        },
      ],
      outbounds: [
        {
          firstName: "Christian",
          lastName: "LaFord",
          rank: "Maj",
          departureDate: "31 Dec 2020",
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          rank: "SSgt",
          departureDate: "28 Feb 2021",
        },
      ],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/members", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        this.setState({ memberList: data}, () => console.log(this.state.memberList));
      });
  }


  /*async componentDidMount(){
    const memberList = await this.getMemberList();
    this.setState({memberList : memberList});
  }

  async getMemberList(){
    const response = await fetch ('http://localhost:8080/members');
    const json = await response.json();
    return json;
  }*/

  render() {
    return (
      <div className="container">
        <div className="row text-center mt-3">
          <div className="col-md-6">
            <h3>Inbounds/Outbounds</h3>
          </div>
        </div>
        <br />
        <div>
          <h4>Inbounds</h4>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">RNLTD</th>
              </tr>
            </thead>
            <tbody>
              {this.state.inbounds.map((inbounds) => (
                <tr>
                  <td> {inbounds.rank} </td>
                  <td> {inbounds.firstName} </td>
                  <td> {inbounds.lastName} </td>
                  <td> {inbounds.RNLTD}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h4>Outbounds</h4>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Departure Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.outbounds.map((outbounds) => (
                <tr>
                  <td> {outbounds.rank} </td>
                  <td> {outbounds.firstName} </td>
                  <td> {outbounds.lastName} </td>
                  <td> {outbounds.departureDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ListMembers memberList = {this.state.memberList[0].first_name}/>
        </div>
      </div>
    );
  }
}

export default PCS_Tracker;
