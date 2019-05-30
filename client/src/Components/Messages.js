import React from 'react';
import socketIOclient from 'socket.io-client';
import Axios from 'axios';
import { BrowserRouter, Route, Link } from  'react-router-dom';
import Signin from './Signin';

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.socket = null;
        this.state = {
            users: [],
            loggedIn: false
        }
    }

    componentDidMount(){
        if(localStorage.getItem('firebaseui::rememberedAccounts')) {
            this.setState({
                loggedIn : true
            });
            let token = JSON.parse(localStorage.getItem('firebaseui::rememberedAccounts'));
            const email = token[0].email
            Axios.get(`http://localhost:5000/messages/${email}`)
            .then(res => console.log(res.data))
            .catch(e => console.log(e));
        } else {
            this.setState({
                loggedIn : false
            })
        }
        
    }


    render() {
        var { user, loggedIn} = this.state;
        if (!loggedIn) {
            return (
                <BrowserRouter>
                    <div>
                        <Link to="/signin">Please login</Link>
                        <Route path="/signin" component={Signin} />
                    </div>
                </BrowserRouter>
            )
            } else {
                return (
                    <div>
                        <h1>Messages</h1>
                        <div>Under construction</div>
                    </div>
                )

            }
    };
};      
        
export default Messages;

