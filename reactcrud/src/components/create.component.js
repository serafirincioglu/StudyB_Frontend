import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            userName: '',
            firstName: '',
            lastName:'',
            password:'',
            email:''
        }
    }

    onChangeUserName(e) {
    this.setState({
        userName: e.target.value
    });
    }

    onChangeFirstName(e) {
    this.setState({
        firstName: e.target.value
    })
    }

    onChangeLastName(e) {
    this.setState({
        lastName: e.target.value
    })
    }

    onChangeEmail(e) {
    this.setState({
        email: e.target.value
    })
    }

    onChangePassword(e) {
    this.setState({
        password: e.target.value
    })  
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            userName: this.state.userName,
            firstName: this.state.firstName,
            lastName:this.state.lastName,
            password: this.state.password,
            email: this.state.email
        };
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        console.log(obj);
        axios.post('/api/users', obj, config)
            .then(res => console.log(res.data));

        this.setState({
            userName: '',
            firstName: '',
            lastName:'',
            password:'',
            email:''
        })
    }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Sign Up</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>User Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.userName}
                      onChange={this.onChangeUserName}
                      />
                </div>
                <div className="form-group">
                    <label>Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.onChangeFirstName}
                      />
                </div>
                <div className="form-group">
                    <label>Surname: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.onChangeLastName}
                      />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      />
                </div>
                <div className="form-group">
                    <label>email: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Register" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}