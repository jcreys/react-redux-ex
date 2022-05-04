import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const LOAD  = 'LOAD';
const CREATE  = 'CREATE';
const DESTROY = 'DESTORY';

const usersReducer = (state = [], action)=> {
    if(action.type === LOAD) {
        state = action.users;
    }
    if(action.type === CREATE){
        state = [...state, action.user];
    }
    
    if(action.type === DESTROY) {
        state = state.filter(user=> user.id !== action.user.id)
    }
    return state;
};

const reducer = combineReducers({
    users: usersReducer
});

const _loadUsers = users => ({type: LOAD, users});
const _createUser = user => ({type: CREATE, user});
const _destroyUser = user => ({type: DESTROY, user});


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

const destroyUser = (user,history)=>{
    return async (dispatch) =>{
        await axios.delete(`/api/users/${user.id}`)
        dispatch(_destroyUser(user));
        history.push('/users/')
    }
}













const store = createStore(reducer, applyMiddleware(thunk));

export default store;
export { loadUsers, createUser, destroyUser };

//steps when adding new functionality:
//1.define thunk
//a)return async func
//b)dispatch action
//2. define action creator
//3.define action
//4. update store if statement