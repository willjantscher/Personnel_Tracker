import React from 'react'
import Member from './Member'

const ListMembers = (props) => {
    
    let members = props.memberList.map(member => <li>{member.first_name}</li> );
    console.log(members);

    return(
        <ul>
            {members}    
        </ul>
    );
}

export default ListMembers