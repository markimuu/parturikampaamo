import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import SvgIcon from "@material-ui/core/SvgIcon";
import HomeIcon from "@material-ui/icons/Home";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";
import PeopleIcon from "@material-ui/icons/People";
import ExploreIcon from "@material-ui/icons/Explore";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Toolbar from "@material-ui/core/ToolBar";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import YlaOtsikkoMUI from "./YlaOtsikkoMUI";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    top: "auto",
    bottom: 1
  },
  teksti: {
    textAlign: "center"
  }
}));

function NaviMUI() {
  let otsikko = "Parturi-kampaamo Mato";
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, val) => {
    setValue(val);
  };

  function ScissorIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M19,3L13,9L15,11L22,4V3M12,12.5A0.5,0.5 0 0,1 11.5,12A0.5,0.5 0 0,1 12,11.5A0.5,0.5 0 0,1 12.5,12A0.5,0.5 0 0,1 12,12.5M6,20A2,2 0 0,1 4,18C4,16.89 4.9,16 6,16A2,2 0 0,1 8,18C8,19.11 7.1,20 6,20M6,8A2,2 0 0,1 4,6C4,4.89 4.9,4 6,4A2,2 0 0,1 8,6C8,7.11 7.1,8 6,8M9.64,7.64C9.87,7.14 10,6.59 10,6A4,4 0 0,0 6,2A4,4 0 0,0 2,6A4,4 0 0,0 6,10C6.59,10 7.14,9.87 7.64,9.64L10,12L7.64,14.36C7.14,14.13 6.59,14 6,14A4,4 0 0,0 2,18A4,4 0 0,0 6,22A4,4 0 0,0 10,18C10,17.41 9.87,16.86 9.64,16.36L12,14L19,21H22V20L9.64,7.64Z" />
      </SvgIcon>
    );
  }

  return (
    <div>
      <AppBar position="fixed" color="default">
        <YlaOtsikkoMUI otsikko={otsikko} />
        <Tabs
          centered
          variant="fullWidth"
          value={value}
          onChange={handleChange}
        >
          <Tab label="Etusivu" component={Link} to="/" icon={<HomeIcon />} />
          <Tab
            label="Tuotevalikoima"
            component={Link}
            to="/tuotteet"
            icon={<ScissorIcon />}
          />
          <Tab
            label="Hinnasto"
            component={Link}
            to="/hinnasto"
            icon={<EuroSymbolIcon />}
          />
          <Tab
            label="Henkilökunta"
            component={Link}
            to="/henkilokunta"
            icon={<PeopleIcon />}
          />
          <Tab
            label="Yhteystiedot"
            component={Link}
            to="/yhteystiedot"
            icon={<ExploreIcon />}
          />
        </Tabs>
      </AppBar>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography
            color="secondary"
            style={{ flexGrow: 1, textAlign: "center" }}
          >
            AJANVARAUS PUHELIMITSE: 012 345 6789<br></br>
            AUKIOLOAJAT: MA-PE: 9-21, LA: 9-20, SU: KIINNI
          </Typography>
        </Toolbar>
      </AppBar>
      {value === 0}
      {value === 1}
      {value === 2}
      {value === 3}
      {value === 4}
    </div>
  );
}

export default NaviMUI;
