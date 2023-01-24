import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import { Button, Paper } from "@mui/material";
import ".././index.css";

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ textAlign: { xs: "left", md: "center" } }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
