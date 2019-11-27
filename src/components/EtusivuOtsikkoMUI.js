import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import AlaOtsikkoMUI from "./AlaOtsikkoMUI";
import ButtonMUI from "./ButtonMUI";

//import Green from "@material-ui/core/colors/green";

const useStyles = makeStyles(theme => ({
  teksti: {
    marginTop: 10
  }
}));

function EtusivuOtsikkoMUI() {
  const classes = useStyles();
  let alaotsikko = "Tervetuloa Matoon!";
  let buttonteksti = "AJANVARAUS 24/7";

  return (
    <div>
      <AlaOtsikkoMUI alaotsikko={alaotsikko} />
      <Typography align="center" className={classes.teksti}>
        Mato on ihmisläheinen ja aikaansa edellä oleva hyvän palvelun
        parturi­-kampaamo­, jonka liike löytyy Helsingin ydinkeskustasta.
        <br></br>
        <ButtonMUI buttonteksti={buttonteksti} />
      </Typography>
    </div>
  );
}

export default EtusivuOtsikkoMUI;
