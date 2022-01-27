import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

function TableComponent(props) {
  const { userData } = props;
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Username</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Website</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={userData.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="props">
              {userData.name}
            </TableCell>
            <TableCell align="right">{userData.username}</TableCell>
            <TableCell align="right">{userData.email}</TableCell>
            <TableCell align="right">{userData.phone}</TableCell>
            <TableCell align="right">{userData.website}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableComponent;
