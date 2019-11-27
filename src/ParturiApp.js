import React from "react";
//import Tapahtumalomake from "./components/Tapahtumalomake";
//import Lista from "./components/Lista";
//import Typography from "@material-ui/core/Typography";
//import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import NaviMUI from "./components/NaviMUI";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import YhteystiedotMUI from "./components/YhteystiedotMUI";
import UutinenMUI from "./components/UutinenMUI";
import AjanvarausOkMUI from "./components/AjanvarausOkMUI";
import HaeUutiset from "./components/HaeUutiset";
import HaeTuotteet from "./components/HaeTuotteet";
import HaeTyontekijat from "./components/HaeTyontekijat";
import HaePalvelut from "./components/HaePalvelut";
import HaeKaikki from "./components/HaeKaikki";

//TEHNYT: Mark Kuutok, 1600507

/* const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        "&&:hover": {
          backgroundColor: "green",
          color: "white"
        }
      }
    }
  }
}); */

function ParturiApp() {
  return (
    <BrowserRouter>
      <div>
        <CssBaseline />
        <NaviMUI />
        <Switch>
          {/* <Route
            exact
            path="/"
          render={props => <EtusivuMUI {...props} uutiset={uutiset} />} /> */}
          <Route exact path="/" component={HaeUutiset} />
          <Route path="/tuotteet" component={HaeTuotteet} />
          <Route path="/hinnasto" component={HaePalvelut} />
          <Route path="/henkilokunta" component={HaeTyontekijat} />
          <Route path="/yhteystiedot" component={YhteystiedotMUI} />
          <Route path="/ajanvaraus" component={HaeKaikki} />
          <Route
            path="/uutinen/:id/:otsikko/:julkaistu"
            component={UutinenMUI}
          />
          <Route path="/varattuaika" component={AjanvarausOkMUI} />
          <Route component={HaeUutiset} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default ParturiApp;
