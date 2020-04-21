import React, { Component } from 'react';
import axios from 'axios';
// import TableRow from './TableRow';
import { Link } from 'react-router-dom';

export default class Index extends Component {


  constructor(props) {
    super(props);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.state = {users: []};
    
    this.state = {
      userName: '',
      password:'',
    }
  }

  onChangeUserName(e) {
    this.setState({
        userName: e.target.value
    });
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
        password: this.state.password,
    };
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    console.log(obj);
    axios.get('/api/users',config)
    .then(response => {
        console.log(response.data);
        response.data.forEach(element => {
          if(element.userName === obj.userName
            && element.password === obj.password){
              console.log("nice");
          }
        });
    })
    .catch(function (error) {
      console.log(error);
    });

    //console.log(this.users);
    
    this.setState({
        userName: '',
        password:'',
    })
  }

    // tabRow(){
    //   return this.state.user.map(function(object, i){
    //       return <TableRow obj={object} key={i} />;
    //   });
    // }

    render() {
      return (
        <div style={{ marginTop: 10 }}>
            <h3>Sign In</h3>
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
                    <label>Password: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Register" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        
        
        // <div>
        //   <h3 align="center">User List</h3>
        //   <table className="table table-striped" style={{ marginTop: 20 }}>
        //     <thead>
        //       <tr>
        //         <th>Username</th>
        //         <th>ID</th>
        //         <th>Admin</th>
        //         <th>Password</th>
        //         <th>Email</th>
        //         <th>First Name</th>
        //         <th>Last Name</th>
        //         <th colSpan="2">Action</th>
        //       </tr>
        //     </thead>
        //     <tbody>
        //       { this.tabRow() }
        //     </tbody>
        //   </table>
        // </div>
      );
    }
  }