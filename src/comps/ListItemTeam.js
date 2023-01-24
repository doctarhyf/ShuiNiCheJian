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

export default function ListItemTeam({ team, onTeamClicked }) {
  return (
    <div onClick={(e) => onTeamClicked(team)} className="clickableListItem">
      <Paper elevation={3}>
        <Box sx={{ display: "flex" }}>
          <img
            style={{ width: 120 }}
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="new"
          />

          <Box sx={{ py: 1, pl: 1 }}>
            <Typography variant="h5">{team.sup.nom}</Typography>
            <Typography>{team.sup.phone}</Typography>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}
