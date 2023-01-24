import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import { Button, Paper } from "@mui/material";
import ".././index.css";
import { USERS, TEAMS, PAGES, ERROR_MESSAGES, USER_ROLE } from "../Data.js";
import { useState } from "react";

export default function ItemPageTitle({ title, subt }) {
  return (
    <div>
      <Typography color="secondary" variant="h4" sx={{}}>
        {title}
      </Typography>
      <Typography>{subt}</Typography>
    </div>
  );
}
