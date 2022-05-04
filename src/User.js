import React from 'react';
import { connect } from 'react-redux';
import { destroyUser } from './store'

const User = ({user, destroy})=> {
    if (!user.id){
        return null;
    }
    return (
        
        <div>
            User details for {user.name}
            <button onClick={()=>destroy(user)}>Delete User</button>
        </div>
    )
}
//can destructure 
export default connect (
    (state, otherProps) => {
        const user = state.users.find(user => user.id  === otherProps.match.params.id*1) || {};
        console.log(user.id);
        return {
            user
        };
    },
    (dispatch, {history})=>{
        return {
            destroy: (user) => dispatch(destroyUser(user, history))
        }
    }
)(User);
//NOTE:
    //i am passed the users - match has params params has an id 
    //^this allows you to 
    //even though on detail page still seeing users --> go to where route is defined add exact to Usrs componeent
    //otherProps --> gets passed as well in addition to state
    //^we're inside a route those other props includes --> history, location, match [43:50]