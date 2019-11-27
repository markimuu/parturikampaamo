import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import HinnastoMUI from "./HinnastoMUI";

const url = "http://localhost:8080";

function HaePalvelut() {
  const [palvelutParturi, setPalvelutParturi] = useState([]);
  const [palvelutKampaamo, setPalvelutKampaamo] = useState([]);
  const [palvelutVari, setPalvelutVari] = useState([]);
  const [virhe, setVirhe] = useState("Haetaan");

  useEffect(() => {
    async function haePalvelut() {
      try {
        const responseparturi = await fetch(url + "/palvelu/all/1");
        const jsonparturi = await responseparturi.json();

        const responsekampaamo = await fetch(url + "/palvelu/all/2");
        const jsonkampaamo = await responsekampaamo.json();

        const responsevari = await fetch(url + "/palvelu/all/3");
        const jsonvari = await responsevari.json();

        setPalvelutParturi(jsonparturi);
        setPalvelutKampaamo(jsonkampaamo);
        setPalvelutVari(jsonvari);
        setVirhe("");
      } catch (error) {
        setPalvelutParturi([]);
        setPalvelutKampaamo([]);
        setPalvelutVari([]);
        setVirhe("Tietojen haku ei onnistunut");
      }
    }

    haePalvelut();
  }, []);

  if (virhe.length > 0) {
    return <Typography>{virhe}</Typography>;
  }
  if (
    palvelutParturi.length > 0 &&
    palvelutKampaamo.length > 0 &&
    palvelutVari.length > 0
  ) {
    return (
      <HinnastoMUI
        parturi={palvelutParturi}
        kampaamo={palvelutKampaamo}
        vari={palvelutVari}
      />
    );
  }
  return <Typography>Yhtään palvelua ei löytynyt</Typography>;
}

export default HaePalvelut;
