import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Axios from 'axios';
import keys from '../../config/keys';
import { Button } from 'antd';
import {Link } from 'react-router-dom';



firebase.initializeApp({
    apiKey: keys.firebase.apikey,
    authDomain: keys.firebase.authdomain
})


class Signin extends Component {
    state = {
        isSignedIn: false
    }
    uiConfig = {
        signInFlow: "popup",
        queryParameterForSignInSuccessUrl: "signInSuccessUrl",
        signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccessWithAuthResult : (authResult, redirectUrl) => {
            var user = authResult.user;
            var credential = authResult.credential;
            var isNewUser = authResult.additionalUserInfo.isNewUser;
            var providerId = authResult.additionalUserInfo.providerId;
            var operationType = authResult.operationType;
            var userValue = JSON.parse(user);
            Axios.post('http://localhost:5000/signin', {
                data:  {
                    user: user,
                    credential: credential,
                    isNewUser: isNewUser,
                    providerId: providerId,
                    operationType: operationType
                }

            } )
            .catch((e) => console.log(e));
            return true;


            
        },
        signInSuccessUrl: "http://localhost:3000/?mode=signInSuccessUrl=profile",

        
    }
}




    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                isSignedIn: !!user,
            });
            // console.log('user', user.providerData[0]);
            


        });
        
    }

    render () {
        console.log(firebase.auth().currentUser)
        return(
            <div className="signin">
            {this.state.isSignedIn ? (
                <span>
                    <div>You are logged in!</div><br />
                    <img alt="profilepic" src={firebase.auth().currentUser.photoURL} height="40px" width="40px"></img>
                    <span>                Welcome {firebase.auth().currentUser.displayName}</span><br />
                    <Button type="default" align="center">
                        <Link to={{pathname: '/profile', user: firebase.auth().currentUser.email}}> View Profile</Link>
                         </Button>
                    
                    <Button align="center" onClick={()=> {
                        firebase.auth().signOut()
                        localStorage.removeItem('firebaseui::rememberedAccounts')
                    }
                        }> Sign Out</Button>
                    
                </span>
                )
            : (
                <StyledFirebaseAuth button 
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
                />
            )
            }
            </div>
        )
    }
}

export default Signin;

