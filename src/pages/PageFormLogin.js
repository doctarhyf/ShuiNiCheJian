import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Paper } from "@mui/material";
import "../index.css";
import Alert from "@mui/material/Alert";

export default function PageFormLogin({
  onLogin,
  phone,
  password,
  setPassword,
  setPhone,
  loginErrorMessage
}) {
  return (
    <div>
      <Typography variant="h5" sx={{ mt: 2, textAlign: "center" }}>
        Welcome to ShuiNiCheJian panel.
      </Typography>
      <Paper
        elevation={4}
        sx={{
          width: { xs: "100%", sm: "100%", md: 400 },
          padding: 2,
          marginTop: 4,
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: 4,
          textAlign: "center"
        }}
      >
        <Typography sx={{ my: 1 }}>
          Please login with your phone and password.
        </Typography>

        <Typography sx={{ fontWeight: "bold" }}>Phone</Typography>

        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <Typography sx={{ fontWeight: "bold" }}>password</Typography>

        <input
          type="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {loginErrorMessage !== "" && (
          <Alert sx={{ mt: 2 }} severity="error">
            {loginErrorMessage}!
          </Alert>
        )}

        <Box>
          <Button onClick={onLogin} sx={{ my: 2 }} variant="outlined">
            Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
