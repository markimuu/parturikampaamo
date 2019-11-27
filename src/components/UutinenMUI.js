import React from "react";
import AlaOtsikkoMUI from "./AlaOtsikkoMUI";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  teksti: {
    marginTop: 10
  }
}));

function UutinenMUI(props) {
  const classes = useStyles();
  let { otsikko } = useParams();
  let { julkaistu } = useParams();

  return (
    <div className={classes.root}>
      <AlaOtsikkoMUI alaotsikko={otsikko} />
      <Typography align="center" variant="body2" className={classes.teksti}>
        Julkaistu: {julkaistu}
      </Typography>
    </div>
  );
}

export default UutinenMUI;
