import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import AjanvarausMUI from "./AjanvarausMUI";

const url = "http://localhost:8080";

function HaeKaikki() {
  const [palvelut, setPalvelut] = useState([]);
  const [tyontekijat, setTyontekijat] = useState([]);
  const [virhe, setVirhe] = useState("Haetaan");

  useEffect(() => {
    async function haeInfo() {
      try {
        const response = await fetch(url + "/palvelu/all");
        const json = await response.json();

        const responsehenk = await fetch(url + "/tyontekija/all");
        const jsonhenk = await responsehenk.json();

        setPalvelut(json);
        setTyontekijat(jsonhenk);
        setVirhe("");
      } catch (error) {
        setPalvelut([]);
        setTyontekijat([]);
        setVirhe("Tietojen haku ei onnistunut");
      }
    }

    haeInfo();
  }, []);

  if (virhe.length > 0) {
    return <Typography>{virhe}</Typography>;
  }
  if (palvelut.length > 0 && tyontekijat.length > 0) {
    return <AjanvarausMUI palvelut={palvelut} tyontekijat={tyontekijat} />;
  }
  return <Typography>Yhtään palvelua ei löytynyt</Typography>;
}

export default HaeKaikki;
