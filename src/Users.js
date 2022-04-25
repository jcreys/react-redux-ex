import React from 'react'
import { connect } from 'react-redux'
const Users = ({ users })=> {
    return(
    <ul>
        {
            users.map( user => {
                return (
                    <li key={ user.id }>
                        { user.name }
                    </li>
                );
            })
        }
    </ul>
    )
}

export default connect(state=>state)(Users);
//interested in users when i connect I end up getting state should have my users