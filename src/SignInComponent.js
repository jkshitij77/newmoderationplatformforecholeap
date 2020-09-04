import React, { Component } from 'react';
import './App.css';
import './login.css';
import firebase from 'firebase';
// import * as db from '../datastore.js';

export default class SignInComponent extends Component{
    constructor(props){
        super(props);
        this.state={ 
            Email: "",
            Password: "",
        };    
    }

    changeEmail = (event) => {
        this.setState({Email: event.target.value});
    }
          
    changePassword = (event) => {
        this.setState({Password: event.target.value});
    }

    signIn = (event) => {
        firebase.auth().signInWithEmailAndPassword(this.state.Email, this.state.Password).catch((error) => {
          alert(error);
          console.log(error);
        });
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            console.log(user);
            console.log("Push to writer page from SignInComponent.");
        
            // TODO: Depending on user type, push to a moderator page or a writer page
            this.props.history.push('/writerpage');
            // this.props.history.push('/moderatorpage');
          }
        });
    }

    render() {
        return (
            <div className="body">
                <div className="LoginContainer">
                    <br />
                    <div>
                        <h1 className= "LoginHeader">Login</h1>
                    </div>
                    <br />
                    <div>
                        <label>Email:   </label>
                        <input className="occupy" type="text" value={this.state.Email} onChange={this.changeEmail} /> 
                        {/* If i do not have the value set to this thing, even i type anyhing in the box, it will not show up */}
                    </div>
                    <br />
                    <div>
                        <label>Password:   </label>
                        <input className="occupy" type="password" value={this.state.Password} onChange={this.changePassword}/>
                    </div>
                    <br />
                        <button onClick={this.signIn} className="submitButton">Login button</button>
                    <br />
                </div>
            </div>
        )
    };
}