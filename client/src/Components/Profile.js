import React from 'react';
import axios from "axios";
import { BrowserRouter, Route, Link } from 'react-router-dom';


class Profile extends React.Component {
    constructor() {
        super();
        this.state={
            profile: []
            
        };
    }

    componentDidMount() {
        let token = JSON.parse(localStorage.getItem('firebaseui::rememberedAccounts'));
        const email = token[0].email
        axios.get(`http://localhost:5000/profile/${email}`)
        .then(res => {
            console.log('fdgfhg',res.data);
            this.setState({
                profile: res.data
            })
        })
        
        .catch((e) => console.log(e));
    }

    render() {
        return(
            <div>
                {this.state.profile.map(user => (
                    <div >
                    <img src={user.photoURL} alt="profilePic" height="100px" width="100px"></img><br />
                    <span>Name : {user.first_name} {user.last_name}</span><br />
                    <span>Email : {user.email}</span><br />
                    <span> Address : {user.address}</span><br />
                    <span> Address2 : {user.address2}</span><br />
                    <span> Phone Number: {user.phone_number}</span><br />
                    <Link to="/uploads" >Uploads</Link><br />
                    <Link to="/history" >History</Link><br />
                    <Link to="updateProfile" >Update Profile</Link>
                    </div>
                ))}
            </div>
            )
        }
    };

export default Profile;


