import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import Box from "@mui/material/Box";

function createData(num, tons) {
  return { num, tons };
}

export default function TableListBons({ bons, totSacs }) {
  return (
    <>
      <TableContainer sx={{ mt: 2 }} component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NUM. BON</TableCell>
              <TableCell>NBR. SACS</TableCell>
              <TableCell>TONNAGE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bons.map((bon) => (
              <TableRow
                key={bon.num}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {bon.num}
                </TableCell>
                <TableCell>{bon.sacs}</TableCell>
                <TableCell>{(bon.sacs * 50) / 1000}</TableCell>
              </TableRow>
            ))}

            <TableRow sx={{ fontWeight: "bold" }}>
              <TableCell component="th" scope="row">
                TOTAL ({bons.length} Camions )
              </TableCell>
              <TableCell>{totSacs} Sacs</TableCell>
              <TableCell>{(totSacs * 50) / 1000} T</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
