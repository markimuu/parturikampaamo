import React, { useState } from "react";
import AlaOtsikkoMUI from "./AlaOtsikkoMUI";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import ClearIcon from "@material-ui/icons/Clear";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import fiLocale from "date-fns/locale/fi";
import { Redirect } from "react-router-dom";

import axios from "axios";

const useStyles = makeStyles(theme => ({
  paperi: {
    marginTop: 10,
    margin: "auto",
    maxWidth: 500,
    padding: 20
  }
}));

function AjanvarausMUI(props) {
  const classes = useStyles();
  let alaotsikko = "Ajanvaraus";
  const [varaus, setValues] = useState({
    nimi: "",
    puh: "",
    paiva: new Date(),
    kello: new Date(),
    tekija: "",
    palvelu: ""
  });
  const [varaukset, setVaraukset] = useState([]);
  const [okei, setOkei] = useState(false);
  const [nimiError, setNimiError] = useState(false);
  const [puhError, setPuhError] = useState(false);
  const [tekijaError, setTekijaError] = useState(false);
  const [palveluError, setPalveluError] = useState(false);
  const [tekstiNimiError, setTekstiNimiError] = useState("");
  const [tekstiPuhError, setTekstiPuhError] = useState("");
  let tyhja = "";
  let numero = /[0-9]/;

  const muuta = e => {
    setValues({
      ...varaus,
      [e.target.name]: e.target.value
    });
  };

  const muutaPaiva = date => {
    setValues({
      ...varaus,
      paiva: date
    });
  };

  const muutaKello = time => {
    setValues({
      ...varaus,
      kello: time
    });
  };

  const lisaaVaraus = e => {
    e.preventDefault();
    if (varaus.nimi === tyhja) {
      setNimiError(true);
      setTekstiNimiError("Kenttä ei saa olla tyhjä");
    } else if (varaus.nimi !== tyhja) {
      setNimiError(false);
      setTekstiNimiError("");
    }
    if (varaus.puh === tyhja || !numero.test(varaus.puh)) {
      setPuhError(true);
      setTekstiPuhError(
        "Kenttä ei saa olla tyhjä ja kenttä saa sisältää vain numeroita"
      );
    } else if (varaus.puh !== tyhja || numero.test(varaus.puh)) {
      setPuhError(false);
      setTekstiPuhError("");
    }
    if (varaus.tekija === tyhja) {
      setTekijaError(true);
    } else if (varaus.tekija !== tyhja) {
      setTekijaError(false);
    }
    if (varaus.palvelu === tyhja) {
      setPalveluError(true);
    } else if (varaus.palvelu !== tyhja) {
      setPalveluError(false);
    }
    if (
      varaus.puh !== tyhja &&
      varaus.nimi !== tyhja &&
      varaus.tekija !== tyhja &&
      varaus.palvelu !== tyhja &&
      numero.test(varaus.puh)
    ) {
      const formData = new FormData();
      formData.append("nimi", varaus.nimi);
      formData.append("puh", varaus.puh);
      formData.append("paiva", varaus.paiva.toLocaleDateString());
      formData.append(
        "kello",
        varaus.kello.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      );
      formData.append("tekija", varaus.tekija);
      formData.append("palvelu", varaus.palvelu);
      axios
        .post("http://localhost:8080/ajanvaraus/add", formData)
        .then(response => {
          if (response.status === 200) {
            setVaraukset([...varaukset, varaus]);
            setOkei(true);
          } else {
            return <Redirect to={{ pathname: "/ajanvaraus" }} />;
          }
        });
    }
  };

  const tyhjenna = e => {
    e.preventDefault();
    setValues({
      nimi: "",
      puh: "",
      paiva: new Date(),
      kello: new Date(),
      tekija: "",
      palvelu: ""
    });
  };

  if (okei) {
    return (
      <Redirect
        to={{ pathname: "/varattuaika", state: { varaukset: varaukset } }}
      />
    );
  }

  return (
    <div>
      <AlaOtsikkoMUI alaotsikko={alaotsikko} />
      <Paper className={classes.paperi}>
        <form>
          <TextField
            fullWidth
            label="Nimi"
            name="nimi"
            id="nimi"
            margin="normal"
            variant="outlined"
            value={varaus.nimi}
            onChange={muuta}
            required
            error={nimiError}
            helperText={tekstiNimiError}
          />
          <TextField
            fullWidth
            label="Puh. numero"
            name="puh"
            id="puh"
            margin="normal"
            variant="outlined"
            value={varaus.puh}
            onChange={muuta}
            required
            error={puhError}
            helperText={tekstiPuhError}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fiLocale}>
            <KeyboardDatePicker
              label="Päivä"
              name="paiva"
              fullWidth
              required
              value={varaus.paiva}
              onChange={muutaPaiva}
              format="dd.MM.yyyy"
            />
            <KeyboardTimePicker
              label="Kello"
              name="kello"
              fullWidth
              required
              value={varaus.kello}
              onChange={muutaKello}
              ampm={false}
              style={{ marginTop: 10 }}
            />
          </MuiPickersUtilsProvider>
          <TextField
            select
            required
            fullWidth
            label="Työntekijä"
            name="tekija"
            value={varaus.tekija}
            onChange={muuta}
            error={tekijaError}
            helperText="Valitse haluamasi työntekijä"
            margin="normal"
            variant="outlined"
          >
            {props.tyontekijat.map(tekija => (
              <MenuItem key={tekija.id} value={tekija.nimi}>
                {tekija.nimi}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            required
            fullWidth
            label="Palvelu"
            name="palvelu"
            value={varaus.palvelu}
            onChange={muuta}
            error={palveluError}
            helperText="Valitse haluamasi palvelu"
            margin="normal"
            variant="outlined"
          >
            {props.palvelut.map(palvelu => (
              <MenuItem key={palvelu.id} value={palvelu.nimi}>
                {palvelu.nimi}
              </MenuItem>
            ))}
          </TextField>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <Button
              style={{ marginRight: 10 }}
              onClick={e => lisaaVaraus(e)}
              variant="contained"
              color="primary"
            >
              <CreateIcon />
              Varaa
            </Button>
            <Button variant="contained" color="secondary" onClick={tyhjenna}>
              <ClearIcon />
              Tyhjennä
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}

export default AjanvarausMUI;
