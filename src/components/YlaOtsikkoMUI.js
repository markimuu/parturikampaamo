import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  teksti: {
    textAlign: "center",
    flexGrow: 1
  }
}));

function YlaOtsikkoMUI(props) {
  const classes = useStyles();

  return (
    <div>
      <Typography color="secondary" variant="h6" className={classes.teksti}>
        {props.otsikko}
      </Typography>
    </div>
  );
}

export default YlaOtsikkoMUI;
