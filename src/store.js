import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const LOAD  = 'LOAD';
const CREATE  = 'CREATE';

const usersReducer = (state = [], action)=> {
    if(action.type === LOAD) {
        state = action.users;
    }
    if(action.type === CREATE){
        state = [...state, action.user];
    }
    return state;
};

const reducer = combineReducers({
    users: usersReducer
});

const _loadUsers = users => ({type: LOAD, users});
const _createUser = user => ({type: CREATE, user});

const loadUsers = ()=> {
    return async(dispatch)=> {
        const users = (await axios.get('/api/users')).data;
        dispatch(_loadUsers(users));
    };
};
const createUser = (name, history)=> {
    return async(dispatch)=> {
        const user = (await axios.post('/api/users', { name })).data
        console.log(user);
        dispatch(_createUser(user));
        history.push(`/users/${user.id}`)
    };
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
export { loadUsers, createUser };