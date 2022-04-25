import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import store, { loadUsers } from './store';
import { HashRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Users from './Users';
import Nav from './Nav'; //nav is inside of a route, component is connected gets information from route as props gets information based on being a connected component

const Home = ()=> <hr />
class _App extends Component{
    componentDidMount(){
        this.props.bootstrap();
    }
//1.can only use a route within a router
//Route component: creating a component that will get passed down information
    render(){
        return (
            <HashRouter>
                <div>
                    <h1>Acme Users</h1>
                    <Route component={ Nav } />
                    <Route component={ Home } />
                    <Route component={ Users } path ='/users'/>
                </div>
            </HashRouter>

            );
        }
}
const App = connect(
    ({users})=> ({users}),
    (dispatch)=> {
        return {
            bootstrap: ()=> dispatch(loadUsers())
        }
    }

)(_App);

render(<Provider store={ store }><App /></Provider>, document.querySelector('#root'));

//NOTES:
    //hash set up correctly if you see pound sign in url
    //Link allows you 
    //hash set up correctly if you see pound sign in url
    //Link allows you to create a link that goes to a particular route
    //click users - can get path name for users (console log)
    //can add path to route - only want this to show up for users won't see users on home but when click on users can see users
    //when click home see home component but when we click users we see home as well 
    //fuzzy - /users has slash in it --> home also has slash 
    