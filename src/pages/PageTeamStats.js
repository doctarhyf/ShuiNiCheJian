import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "../comps/ProTip";
import { Button, Paper } from "@mui/material";
import ".././index.css";
import { USERS, TEAMS, PAGES, ERROR_MESSAGES, USER_ROLE } from "../Data.js";
import { useState } from "react";
import ItemPageTitle from "../comps/ItemPageTitle";

export default function PageTeamStats() {
  return (
    <div>
      <ItemPageTitle
        title="Team Stats"
        subt="This page shows all details about the selected team"
      />
    </div>
  );
}
