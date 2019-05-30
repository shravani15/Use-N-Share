import React from 'react';
import io from 'socket.io-client';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            chat_ready: false,
            users: [],
            messages: [],
            message: ''
        }
        this.socket = io('http://localhost:5000');
    }




    render() {
        return(
            <div>
                <h1>Chat</h1>
                <div>Under construction</div>
            </div>
            
        )
    }    
}
export default Chat;


//let token = JSON.parse(localStorage.getItem('firebaseui::rememberedAccounts'));
// const email = token[0].email