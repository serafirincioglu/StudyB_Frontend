import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(name) {
  return { name};
}

const rows = [
  createData('CS 492'),

];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders(props) {
  const classes = useStyles();
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
