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

export default function RepportHUD({ bons, totSacs }) {
  return (
    <Box>
      <TableContainer sx={{ mt: 2 }} component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableRow sx={{ fontWeight: "bold" }}>
            <TableCell component="th" scope="row">
              TOTAL ({bons.length} Camions )
            </TableCell>
            <TableCell>{totSacs} Sacs</TableCell>
            <TableCell>{totSacs * 50} T</TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </Box>
  );
}
