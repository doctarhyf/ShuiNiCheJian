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
import ListItemTeam from "../comps/ListItemTeam";

export default function PageHomeInterpret({ onTeamClicked }) {
  return (
    <div>
      <ItemPageTitle
        title="Teams List"
        subt="Please select a team to view all details"
      />

      <Box
        sx={{
          mt: 2,
          mb: 4,
          display: "flex",
          flexDirection: "column",
          gap: 4
        }}
      >
        {TEAMS.map((it, idx) => (
          <ListItemTeam onTeamClicked={onTeamClicked} team={it} key={idx} />
        ))}
      </Box>
    </div>
  );
}
