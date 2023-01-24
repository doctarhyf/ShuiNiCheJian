import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Button, Paper } from "@mui/material";
import "./index.css";
import { USERS, TEAMS, PAGES, ERROR_MESSAGES, USER_ROLE } from "./Data.js";
import { useState } from "react";
import PageFormLogin from "./pages/PageFormLogin";
import Copyright from "./comps/Copyright";
import PageHomeInterpret from "./pages/PageHomeInterpret";
import PageTeamStats from "./pages/PageTeamStats";
import PageHomeSuperVisor from "./pages/PageHomeSuperVisor";

export default function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.LOGIN);
  const [phone, setPhone] = useState("0972556355");
  const [password, setPassword] = useState("1234");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [selectedTeam, setSelectedTeam] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);

  const onLogin = (phone, password) => {
    const keys = Object.keys(USERS);
    const userExists = keys.includes(phone);

    if (userExists === false) {
      setLoginErrorMessage(ERROR_MESSAGES.USER_DONT_EXIST);
      return;
    }

    setLoginErrorMessage("");
    const userData = USERS[phone];
    setCurrentUser(userData);

    //user exist checking password

    const passwordIsCorrect = password === userData.password;
    if (passwordIsCorrect === false) {
      setLoginErrorMessage(ERROR_MESSAGES.PASSWORD_INCORRECT);
      return;
    }

    //alert(`userData:.\n\n${JSON.stringify(userData)}`)

    TEAMS.map((ct, idx) => {
      if (userData.phone === ct.sup.phone) {
        setSelectedTeam(ct);
      }
    });
    //

    //alert(`selected team\n\n.${JSON.stringify(selectedTeam)}`);

    //if(true) return;
    setLoginErrorMessage("");
    userData.role === USER_ROLE.INTERPRETE
      ? gotoPage(PAGES.HOME_INTERPRETE)
      : gotoPage(PAGES.HOME_SUPERVISOR);
  };

  const gotoPage = (page) => {
    setCurrentPage(page);
  };

  const onLogout = (e) => {
    setLoginErrorMessage("");
    setCurrentPage(PAGES.LOGIN);
    setCurrentUser(undefined);
  };

  const onTeamClicked = (curTeam) => {
    setSelectedTeam(curTeam);
    gotoPage(PAGES.PAGE_TEAM_STATS);
  };

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        {currentUser && (
          <Box>
            <Typography>
              Hello Mr <b>{currentUser.nom}</b>{" "}
            </Typography>
            <Typography>
              Phone: <b>{currentUser.phone}</b>{" "}
            </Typography>
            <Typography>
              Date: <b>{new Date().toString()}</b>{" "}
            </Typography>
          </Box>
        )}

        <Typography variant="h2" sx={{ textAlign: "center" }} component="h1">
          ShuiNi CheJian
        </Typography>

        {currentPage === PAGES.LOGIN && (
          <PageFormLogin
            loginErrorMessage={loginErrorMessage}
            phone={phone}
            setPhone={setPhone}
            password={password}
            setPassword={setPassword}
            onLogin={(e) => onLogin(phone, password)}
          />
        )}

        {currentPage === PAGES.HOME_INTERPRETE && (
          <PageHomeInterpret onTeamClicked={onTeamClicked} />
        )}

        {currentPage === PAGES.PAGE_TEAM_STATS && <PageTeamStats />}

        {currentPage === PAGES.HOME_SUPERVISOR && (
          <PageHomeSuperVisor
            currentUser={currentUser}
            selectedTeam={selectedTeam}
          />
        )}

        {currentPage !== PAGES.LOGIN && (
          <Container sx={{ textAlign: "center" }}>
            <Button
              className="logout"
              color="error"
              variant="outlined"
              onClick={onLogout}
            >
              Logout
            </Button>
          </Container>
        )}

        <Copyright />
      </Box>
    </Container>
  );
}
