import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import store, { loadUsers } from './store';
import { HashRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
const Nav = ({location: {pathname}})=> {
    //gets passed history obj

    return (
        <nav>
            <Link to='/' className={ pathname === '/' ? 'selected': ''}>Home</Link>
            <Link to='/users' className={ pathname === '/users' ? 'selected': ''}>Users</Link>
        </nav>
    );
};

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
                    <ul>
                        {
                            this.props.users.map( user => {
                                return (
                                    <li key={ user.id }>
                                        { user.name }
                                    </li>
                                );
                            })
                        }
                    </ul>
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