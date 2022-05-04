import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import faker from 'faker';
import { createUser } from './store';
const Nav = ({ create, users, location: { pathname } })=> {
    return(
        <nav>
            <Link to='/' className={ pathname === '/' ? 'selected': ''}>Home</Link>
            <Link to='/users' className={ pathname === '/users' ? 'selected': ''}>Users({users.length})</Link>
            <button onClick ={()=> create(faker.name.firstName())}>Create</button>
        </nav>
    )
}
const mapDispatch = (dispatch, {history}) => {
    return {
        create: (name)=>{
            return dispatch(createUser(name, history))
        }
    }
}
export default connect(state=>state, mapDispatch)(Nav);
//interested in users when i connect I end up getting state should have my users

//have another component -detailed componenet set up each of our users as link
