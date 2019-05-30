import React from 'react';
import axios from "axios";

class Review extends React.Component {
    constructor() {
        super();
        this.state={
            user:[],
            isLoaded:false
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/review')
        .then(res=> {
            console.log(res.data);
            this.setState(()=>({
                isLoaded:true,
                user: res.data
            }))
        })
        .catch(err => console.log(err))
    }

    render() {
        var {isLoaded,user} = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else{
            return(
                <div className="App">
                <ul>
                    {user.map(user =>(
                        <li key={user.user_id}>
                        <span>{user.user_name}<br/></span>
                        <span>{user.review_id}<br/></span>
                        <span>{user.product_id}<br/></span>
                        <span>{user.review}<br/></span>
                        <span>{user.rating}</span>
                        </li>
                    ))}
                </ul>
                </div>
            )
        }
    };
};

export default Review;
