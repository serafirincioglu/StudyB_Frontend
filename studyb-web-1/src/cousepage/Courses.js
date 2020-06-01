import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';


export default function Orders(props) {
  return (
    <React.Fragment>
      <Title>Courses</Title>
      <Table size="small">
        <TableHead>
          <TableRow>

            <TableCell>Course Name</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.rows.length > 0 ? ( props.rows.map((row) => (
              <TableRow key={row.chatroomName}>
                <TableCell>{row.chatroomName}</TableCell>
              </TableRow>
            ))
            )
            : (
              <tr>
                <td colSpan={4}>Girdi yok</td>
              </tr>
            )
          }
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
