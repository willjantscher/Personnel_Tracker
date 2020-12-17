import React from 'react'
import Member from './Member'

const ListMembers = (props) => {
    return(
        <ul>
            {props.memberList.map(member => <li><Member key={member.member_id} name={member.first_name} /></li> )}    
        </ul>
    );
}

export default ListMembers