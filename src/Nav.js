import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const Nav = ({ users, location: { pathname } })=> {
    return(
        <nav>
            <Link to='/' className={ pathname === '/' ? 'selected': ''}>Home</Link>
            <Link to='/users' className={ pathname === '/users' ? 'selected': ''}>Users({users.length})</Link>
        </nav>
    )
}

export default connect(state=>state)(Nav);
//interested in users when i connect I end up getting state should have my users

//have another component -detailed componenet set up each of our users as link
