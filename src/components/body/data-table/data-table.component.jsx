import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./data-table.component.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#4db6ac",
    color: theme.palette.common.white,
    fontSize: "medium"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "small"
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

function createData(currencyName, buyPrice, sellPrice, nameShort) {
  return { currencyName, buyPrice, sellPrice, nameShort };
}

const rows = [
  createData("Американський долар ", 35.14, 35.44, "(USD)"),
  createData("Євро ", 36.32, 36.74, "(EUR)"),
  createData("Російський рубль ", "-", "-", "(RUR)"),
  createData("Англійський фунт ", 40.88, 45.12, "(GBP)"),
  createData("Швейцарський франк ", 33.78, 37.61, "(CHF)"),
  createData("Польський злотий ", 7.54, 7.82, "(PLN)")
];

export default function DataTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Грошова одиниця</StyledTableCell>
            <StyledTableCell align="center">Купівля</StyledTableCell>
            <StyledTableCell align="center">Продаж</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.currencyName}>
              <StyledTableCell component="th" scope="row">
                <div className="currency-name">{row.currencyName}</div>
                <p style={{ fontWeight: "bold" }}>&nbsp;{row.nameShort}</p>
              </StyledTableCell>
              <StyledTableCell style={{ fontSize: "20px" }} align="center">
                {row.buyPrice}
              </StyledTableCell>
              <StyledTableCell style={{ fontSize: "20px" }} align="center">
                {row.sellPrice}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
