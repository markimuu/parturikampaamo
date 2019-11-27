import React from "react";
import EtusivuOtsikkoMUI from "./EtusivuOtsikkoMUI";
import UutisetMUI from "./UutisetMUI";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

function EtusivuMUI(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <EtusivuOtsikkoMUI />
      <UutisetMUI uutiset={props.uutiset} />
    </div>
  );
}

export default EtusivuMUI;
