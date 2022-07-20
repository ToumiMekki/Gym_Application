import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {Getmembers} from '../../ApiCalls'
import { useState } from "react";


const columns = [
  { id: 'name', label: 'Revenu', minWidth: 100,align: 'center'},
  { id: 'last', label: 'Last Name', minWidth: 100,align: 'center'},
  {
    id: 'email',
    label: 'Email',
    minWidth: 140,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'phone',
    label: 'Phone Number',
    minWidth: 120,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'gender',
    label: 'Gender',
    minWidth: 80,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'months',
    label: 'Monthes Paid',
    minWidth: 200,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'formation',
    label: 'Formation',
    minWidth: 200,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
  id: 'action',
  label: 'Action',
  minWidth: 100,
  align: 'center',
  format: (value) => value.toFixed(2),
},

];

function createData(name, last, email, phone,gender,months,formation,action) {
  return { name, last, email, phone, gender,months,formation,action};
}

export default function ColumnGroupingTable() {

  const [OpenCardMember,setOpenCardMember]=useState(false)
const ClickCardMember = ()=>{
    setOpenCardMember((OpenCardMember)=> !OpenCardMember) }

const rows = [
  createData('Ammar Mekki', 'Toumi','amartoumi100@gmail.com','0699977753','Homme','Avril,Mars,juin','fitness,kickBoxing',<button onClick={ClickCardMember}>show</button>),
];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%',marginLeft:'0px',marginTop:'0px',
                    background:'#ffffff'}}>
      <TableContainer sx={{ maxHeight: 520 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 0, minWidth: column.minWidth ,background:'#00001b',color:'#ffffff' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.last}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}
                        style={{ top: 0,background:'#FFFFFF',color:'#00002b',fontWeight:'700', }}
                        >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}