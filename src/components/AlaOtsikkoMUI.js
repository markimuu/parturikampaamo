import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  otsikko: {
    marginTop: 130
  }
}));

function AlaOtsikkoMUI(props) {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h2" align="center" className={classes.otsikko}>
        {props.alaotsikko}
        <br />
      </Typography>
    </div>
  );
}

export default AlaOtsikkoMUI;
