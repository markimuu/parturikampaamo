import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  buttoni: {
    "&&:hover": {
      backgroundColor: "green",
      color: "white"
    },
    marginTop: 20
  }
}));

function ButtonMUI(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/ajanvaraus"
        className={classes.buttoni}
      >
        {props.buttonteksti}
      </Button>
    </div>
  );
}

export default ButtonMUI;
