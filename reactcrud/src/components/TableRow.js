// TableRow.js

import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.userName}
          </td>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.admin}
          </td>
          <td>
            {this.props.obj.password}
          </td>
          <td>
            {this.props.obj.email}
          </td>
          <td>
            {this.props.obj.firstName}
          </td>
          <td>
            {this.props.obj.lastName}
          </td>
          <td>
            <button className="btn btn-primary">Edit</button>
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;