import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Button,
  Paper,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel
} from "@mui/material";
import ".././index.css";
import { HEURES_DE_SERV } from "../Data.js";
import { useState } from "react";
import ItemPageTitle from "../comps/ItemPageTitle";
import TableListBons from "../comps/TableListBons";
import RepportHUD from "../comps/RepportHUD";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const SECTIONS = {
  PG_HOME: "home",
  PG_NEW_REP: "newrep",
  PG_REP_HIST: "repohist"
};

function SectionHome({ onNewRepport, onRepportHistory }) {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2, mb: 2 }}
    >
      <Button onClick={onNewRepport} variant="contained">
        New Repport
      </Button>
      <Button onClick={onRepportHistory} variant="contained">
        Repports History
      </Button>
    </Box>
  );
}

function SectionNewRepport({
  newNumSacs,
  onAddNewBon,
  setNewNumSacs,
  bons,
  bonsCount,
  totalTonnage,
  onResetTable,
  totSacs,
  onShowRepport,
  onHeureDeServiceChange,
  curHeureDeService,
  setCamionsRest,
  camionsRest
}) {
  const [showTable, setShowTable] = useState(true);

  return (
    <div>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ p: 2 }}>AJOUT NOUVEAU BON</Typography>
        <input
          type="number"
          value={newNumSacs}
          onChange={(e) => setNewNumSacs(e.target.value)}
        />

        {newNumSacs > 0 && (
          <Button sx={{ ml: 2 }} onClick={onAddNewBon}>
            AJOUTER
          </Button>
        )}

        <Typography sx={{ p: 2 }}>HEURE DE SERVICE</Typography>

        <Box sx={{ textaltextAlign: "center" }}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
            <RadioGroup
              sx={{ display: "flex", flexDirection: "row" }}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                defaultChecked
                value={HEURES_DE_SERV.MATIN.val}
                control={<Radio />}
                label={HEURES_DE_SERV.MATIN.name}
                onChange={onHeureDeServiceChange}
              />
              <FormControlLabel
                onChange={onHeureDeServiceChange}
                value={HEURES_DE_SERV.APREM.val}
                control={<Radio />}
                label={HEURES_DE_SERV.APREM.name}
              />
              <FormControlLabel
                onChange={onHeureDeServiceChange}
                value={HEURES_DE_SERV.NUIT.val}
                control={<Radio />}
                label={HEURES_DE_SERV.NUIT.name}
              />
            </RadioGroup>
          </FormControl>
          <Typography variant="h4">
            {curHeureDeService.from} - {curHeureDeService.to}
          </Typography>
        </Box>

        <Typography sx={{ p: 2 }}>CAMIONS RESTES</Typography>

        <input
          type="number"
          value={camionsRest}
          defaultValue={0}
          onChange={(e) => setCamionsRest(e.target.value)}
        />

        <Box
          sx={{
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            width: "auto",
            mt: 2
          }}
        >
          <Button variant="outlined" sx={{ ml: 2 }} onClick={onResetTable}>
            RESET TABLE
          </Button>

          <Box sx={{ ml: 2, mr: 2 }}>
            <div>
              Show/Hide Table{" "}
              <Checkbox
                defaultChecked
                value={showTable}
                onChange={(e) => setShowTable(e.target.checked)}
              />
            </div>
          </Box>

          <Button variant="outlined" sx={{}} onClick={onShowRepport}>
            SHOW REPPORT
          </Button>
        </Box>
        {showTable === true && (
          <TableListBons
            sx={{ mt: 2 }}
            bons={bons}
            bonsCount={bonsCount}
            totalTonnage={totalTonnage}
            totSacs={totSacs}
          />
        )}
      </Box>
    </div>
  );
}

export default function PageHomeSuperVisor({ currentUser, selectedTeam }) {
  const [curSection, setCurSection] = useState(SECTIONS.PG_HOME);
  const [newNumSacs, setNewNumSacs] = useState(0);
  const [totSacs, setTotSacs] = useState(0);
  const [bons, setBons] = useState([]);
  const [camionsRest, setCamionsRest] = useState(0);

  const [curHeureDeService, setCurHeureDeService] = useState(
    HEURES_DE_SERV.mat
  );

  const onHeureDeServiceChange = (e) => {
    const val = e.target.value;

    setCurHeureDeService(HEURES_DE_SERV[val]);
  };

  const onResetTable = (e) => {
    setBons([]);
    //setBonsCount(bons.length);
    setTotSacs(0);

    alert(selectedTeam);
  };
  //=====

  const onAddNewBon = (v) => {
    if (v === 0) {
      alert("Value cant be zero!");
      return;
    }

    const newBon = {
      num: bons.length + 1,
      sacs: newNumSacs
    };
    setTotSacs(Number.parseFloat(totSacs) + Number.parseFloat(newBon.sacs));
    let newBons = [...bons, newBon];
    setBons(newBons);

    alert(
      `Nouveau bon ajoute avec succes!\nNombre Sacs: ${
        newBon.sacs
      }\nNombres total sacs: ${
        Number.parseInt(totSacs) + Number.parseInt(newBon.sacs)
      }.\nTot Tonnage: ${((totSacs + newBon.sacs) * 50) / 1000} Tonnes`
    );
  };

  const onNewRepport = (e) => {
    gotoSection(SECTIONS.PG_NEW_REP);
  };

  const onRepportHistory = (e) => {
    gotoSection(SECTIONS.PG_REP_HIST);
  };

  const gotoSection = (section) => setCurSection(section);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const onShowRepport = (e) => {
    setOpen(true);
  };

  return (
    <div>
      <ItemPageTitle
        title="Supervisors"
        subt="This page helps you feel repports"
      />

      <Paper elevation={3} sx={{ p: 2, mt: 2, mb: 2 }}>
        {curSection !== SECTIONS.PG_HOME && (
          <Button onClick={(e) => gotoSection(SECTIONS.PG_HOME)}>BACK</Button>
        )}

        <RepportHUD bons={bons} totSacs={totSacs} />

        {curSection === SECTIONS.PG_HOME && (
          <SectionHome
            onNewRepport={onNewRepport}
            onRepportHistory={onRepportHistory}
          />
        )}
        {curSection === SECTIONS.PG_NEW_REP && (
          <SectionNewRepport
            setCamionsRest={setCamionsRest}
            camionsRest={camionsRest}
            curHeureDeService={curHeureDeService}
            onHeureDeServiceChange={onHeureDeServiceChange}
            onShowRepport={onShowRepport}
            newTonnage={newNumSacs}
            onAddNewBon={(e) => onAddNewBon(newNumSacs)}
            bons={bons}
            newNumSacs={newNumSacs}
            setNewNumSacs={setNewNumSacs}
            onResetTable={onResetTable}
            totSacs={totSacs}
          />
        )}

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Rapport Chargement"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Typography>
                {new Date().getMonth() + 1}月{new Date().getDate()}日
              </Typography>
              <Typography>水泥包装</Typography>
              <Typography> 班长：@{currentUser.nom} </Typography>
              <Typography>
                {" "}
                班{selectedTeam.id.toUpperCase()}(Équipe{" "}
                {selectedTeam.id.toUpperCase()})
              </Typography>
              <Typography> • {"白班"} •</Typography>
              <Typography>
                {" "}
                从{curHeureDeService.from}到{curHeureDeService.to}
              </Typography>
              <Typography> 装车{bons.length}辆</Typography>
              <Typography> 带子用{totSacs}个</Typography>
              <Typography> 共计{(totSacs * 50) / 1000}吨 </Typography>
              <Typography>现场还有{camionsRest}辆车</Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>Copier</Button>
            <Button onClick={handleClose} autoFocus>
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </div>
  );
}
