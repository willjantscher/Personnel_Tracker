import React from 'react'
//import Member from './Member'

const ListMembers = (props) => {
    
    let inboundMembers = props.memberList.filter((inboundMember) => (inboundMember.arrival_date !== null));
    let outboundMembers = props.memberList.filter((outboundMember) => (outboundMember.departure_date !== null));   

    return(
        <div>
            <h4>Inbound Members</h4>
            <div className="row">
            <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Paygrade</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">RNLTD</th>
              </tr>
            </thead>
            <tbody>
            {inboundMembers.map((inbounds) => (
                <tr>
                  <td> {inbounds.paygrade} </td>
                  <td> {inbounds.first_name} </td>
                  <td> {inbounds.last_name} </td>
                  <td> {inbounds.arrival_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
            <br/>
            <br/>
          <h4>Outbound Members</h4>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Paygrade</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Departure Date</th>
              </tr>
            </thead>
            <tbody>
              {outboundMembers.map((outbounds) => (
                <tr>
                  <td> {outbounds.paygrade} </td>
                  <td> {outbounds.first_name} </td>
                  <td> {outbounds.last_name} </td>
                  <td> {outbounds.departure_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
    );
}

export default ListMembers