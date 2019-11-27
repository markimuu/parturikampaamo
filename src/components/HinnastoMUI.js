import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AlaOtsikkoMUI from "./AlaOtsikkoMUI";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles(theme => ({
  panel: {
    marginTop: 20,
    maxWidth: "40%",
    margin: "auto"
  }
}));

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiExpansionPanelDetails);

function HinnastoMUI(props) {
  let alaotsikko = "Hinnasto";
  const classes = useStyles();
  const [expanded, setExpanded] = useState("");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <AlaOtsikkoMUI alaotsikko={alaotsikko} />
      <Paper className={classes.panel}>
        <ExpansionPanel
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <ExpansionPanelSummary
            aria-controls={"panel1d-content"}
            id={"panel1d-header"}
          >
            <Typography color="secondary">PARTURIPALVELUT</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Table
              stickyHeader
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow style={{ color: "red" }}>
                  <TableCell>Palvelu</TableCell>
                  <TableCell align="right">Hinta</TableCell>
                </TableRow>
              </TableHead>
              {props.parturi.map(palvelu => (
                <TableBody>
                  <TableRow key={palvelu.id}>
                    <TableCell component="th" scope="row">
                      {palvelu.nimi}
                    </TableCell>
                    <TableCell align="right">{palvelu.hinta}</TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <ExpansionPanelSummary
            aria-controls={"panel2d-content"}
            id={"panel2d-header"}
          >
            <Typography color="secondary">KAMPAAMOPALVELUT</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Table
              stickyHeader
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow style={{ color: "red" }}>
                  <TableCell>Palvelu</TableCell>
                  <TableCell align="right">Hinta</TableCell>
                </TableRow>
              </TableHead>
              {props.kampaamo.map(palvelu => (
                <TableBody>
                  <TableRow key={palvelu.id}>
                    <TableCell component="th" scope="row">
                      {palvelu.nimi}
                    </TableCell>
                    <TableCell align="right">{palvelu.hinta}</TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <ExpansionPanelSummary
            aria-controls={"panel3d-content"}
            id={"panel3d-header"}
          >
            <Typography color="secondary">VÄRJÄYKSET</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Table
              stickyHeader
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow style={{ color: "red" }}>
                  <TableCell>Palvelu</TableCell>
                  <TableCell align="right">Hinta</TableCell>
                </TableRow>
              </TableHead>
              {props.vari.map(palvelu => (
                <TableBody>
                  <TableRow key={palvelu.id}>
                    <TableCell component="th" scope="row">
                      {palvelu.nimi}
                    </TableCell>
                    <TableCell align="right">{palvelu.hinta}</TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Paper>
    </div>
  );
}

export default HinnastoMUI;
